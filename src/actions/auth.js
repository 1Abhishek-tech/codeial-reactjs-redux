import { PostsList } from '../components';
import { APIUrls } from '../helpers/urls';
import { LOGIN_START } from './actionTypes';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email,password){
    return (dispatch)=>{
        const url = APIUrls.login(),
        fetch(url,{
            method : 'POST',
            headers : {
                'Content-Type' : 'x-ww-form-urlencoded'
            },
            body : getFormBody({email,password})
        })
    }
}