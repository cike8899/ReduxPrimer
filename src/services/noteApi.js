import { post, getAll, get } from './commonApi';

let url = "http://localhost:9000/api/notes";

export function getNoteById(id) {
    let uri = url + "/getnotebyid/" + id;
    return get(uri);
} 