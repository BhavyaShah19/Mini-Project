class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        if (message.includes('hello')) {
            this.actionProvider.handleHello();
        }
        if (message.includes("javascript")) {
            this.actionProvider.handleJavascriptList();
        }
    }
}

export default MessageParser