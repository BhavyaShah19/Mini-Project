class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleJavascriptList = () => {
        const message = this.createChatbotMessage(
            "Fantastic, I've got the following resources for you on Javascript:",
            {
                widget: "javascriptLinks",
            }
        );

        this.updateChatbotState(message);
    };
    updateChatbotState(message) {
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}


export default ActionProvider;