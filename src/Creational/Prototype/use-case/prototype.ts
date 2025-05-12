import Document from './document';

interface IProto {
    clone(mode: number): Document;
}
export default IProto;
