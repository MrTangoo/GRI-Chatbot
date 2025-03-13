import Script from 'next/script';

const Bot = () => {
    return (
        <div>
            <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" />
            <df-messenger
                chat-icon="https:&#x2F;&#x2F;cdn-icons-png.flaticon.com&#x2F;512&#x2F;5320&#x2F;5320931.png"
                intent="WELCOME"
                chat-title="GRI_Chatbot"
                agent-id="450e6685-2acf-48a7-ad19-2cb8d1f12cf9"
                language-code="fr"
            ></df-messenger>
        </div>
    );
};
export default Bot;