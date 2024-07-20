import { post,put, get,postJson } from "./request.js";

/** 发送手机验证码 */
export function getPhoneCode(params) {
  return get("SendVerificationCodeNoCheckUser", params);
}
export function commitRegisForm(data) {
  return postJson("/warranty", data);
}
export function checkStatus(data) {
  return get("/warranty/find/"+data.orderId);
}
export function commitQuestion(data) {
  return postJson("/warranty/updateQA",data);
}