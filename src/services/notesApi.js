import { post, getAll, get } from './commonApi';

let url = "http://localhost:9000/api/notes";

export function getAllNotes() {
    let uri = url + "/getallnotesexcerpt";
    return getAll(uri);
} 