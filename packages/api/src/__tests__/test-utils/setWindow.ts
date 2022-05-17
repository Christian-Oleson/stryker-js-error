export default function setWindow(name: string, value: string) {
    Object.defineProperty(window.document, name, {
        writable: true,
        value: value,
    });
}