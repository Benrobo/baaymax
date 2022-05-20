import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';




export class Notification {

    constructor(duration = 3000) {
        this.duration = duration
        if (typeof window !== "undefined") {
            this.notif = new Notyf({
                duration: this.duration,
                position: {
                    x: "right",
                    y: "top"
                }
            })
        }

    }

    error(message = "ERROR") {
        this.notif.error({
            message,
            dismissible: true
        })
    }

    success(message = "SUCCESS") {
        return this.notif.success({
            message,
            dismissible: true
        })
    }
}

export function validateEmail(email) {
    const tester =
        /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!email) return false;

    let emailParts = email.split("@");

    if (emailParts.length !== 2) return false;

    let account = emailParts[0];
    let address = emailParts[1];

    if (account.length > 64) return false;
    else if (address.length > 255) return false;

    let domainParts = address.split(".");
    if (
        domainParts.some(function (part) {
            return part.length > 63;
        })
    )
        return false;

    if (!tester.test(email)) return false;

    return true;
}