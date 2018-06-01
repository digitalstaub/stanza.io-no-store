export default function (client, stanzas) {
    const NS = 'urn:xmpp:hints';
    const messageAttribute = stanzas.define({
        name: 'noStore',
        element: 'no-store',
        namespace: NS,
    });

    stanzas.withMessage((Message) => {
        stanzas.extend(Message, messageAttribute);
    });
}
