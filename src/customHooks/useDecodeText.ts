const useDecodeText = (text:any) => {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.body.textContent;
}

export default useDecodeText