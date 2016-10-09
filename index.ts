
// creating a "var module: any" will allow use of module.exports
declare var module: any;

let waxilliumProtractorPlugin = {
    addSuccess(info: {specName: string}) {
        console.log('on success: ' + info.specName);
    },
    onPageLoad() {
        this.addSuccess({specName: 'Hello, World!'});
    }
};

module.exports = waxilliumProtractorPlugin;
