module.exports = {
    index: (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        response.end('sample_controllerのindexに到達しました。');
        return true;
    }
}