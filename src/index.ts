import {
    Application,
    chalkin,
    Context,
    getTimeString,
    join,
    Router,
    send
} from './mod.ts';

const port = 8000;

const app = new Application();
const main = new Router();

app.addEventListener('error', (err) => {
    return console.log(`> [${getTimeString()} (${new chalkin().red('Error')})]: ${err.message}`)
});

app.use(async (ctx, next) => {
    await next();

    return console.log(`> [${getTimeString()} (${new chalkin().blueBright('Info')})]: ${ctx.request.method} ${ctx.request.url.pathname}`);
});

main.get('/static/:path+', async (ctx: Context) => {
    return await send(ctx, ctx.request.url.pathname, {
        root: join(Deno.cwd(), 'public')
    });
});

main.get('/', ({ response }: Context) => {
    response.body = 'hello world';
});

main.get('/game', async ({ response }: Context) => {
    response.headers.set('Content-Type', 'text/html');
    return response.body = await Deno.readTextFile('./public/views/game.html');
});

app.use(main.routes());
app.use(main.allowedMethods());

console.log(`> [${getTimeString()} (${new chalkin().blueBright('Info')})]: Running on port ${port}`);
await app.listen({ port });