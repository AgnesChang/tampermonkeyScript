// ==UserScript==
// @name         Yahoo Login
// @namespace    https://github.com/puritys
// @version      0.1
// @description  login yahoo
// @author       puritys
// @match        https://login.yahoo.com/account/challenge/p*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var passwords = {
       "account": "paswd"
    };

    var func = function () {
        if (document.querySelector("#password-challenge")) {
             var name = document.querySelector("#password-challenge .username").innerHTML;
             console.log("challenge name = " + name);
             name = name.replace(/Hello[^;]+;/, '').replace(/，.+/, '');
             console.log("filter name = " + name);
             if (passwords[name]) {
                document.querySelector("#password-challenge input[type=password]").value = passwords[name];
                document.querySelector("#password-challenge input[type=submit]").click();

             }
        }
        // skip phone-obfuscation-challenge
        if (document.querySelector("#phone-obfuscation-challenge")) {
        //  document.querySelector("#phone-obfuscation-challenge input[type=submit]").click();

        }
    };
    var func2 = function () {
        document.querySelector("#login-signin").click();

    };
    setTimeout(func, 2000);

 })();
