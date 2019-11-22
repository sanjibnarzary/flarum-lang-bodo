//! moment.js locale configuration
// ममेन्त जायगानि
/**
* राव दानस्लायगिरि: सनजिब नार्ज्जारी
* इमैल: o-._.-o@live.com
*
*/

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



    var brx = moment.defineLocale('brx', {
        months : 'जानुवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलाई_आगस्त_सेप्तेम्बर_अक्ट'बर_नबेम्बर_दिसेम्बर'.split('_'),
        monthsShort : 'जान._फेब्रु._मार्च_एप्रि._मे_जून_जुला._आगस्त._सेप्तेम._अक्ट._नबेम._दिसेम.'.split('_'),
        monthsParseExact: true,
        weekdays : 'रबिबार_समबार_मंगलबार_बुधवार_ब्रूहष्फतिवार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort : 'रबि_सम_मंगल_बुध_ब्रूहष्त_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_स_मं_बु_ब्रू_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm रिंगा',
            LTS : 'A h:mm:ss रिंगा',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm रिंगा',
            LLLL : 'dddd, D MMMM YYYY, A h:mm रिंगा'
        },
        calendar : {
            sameDay : '[दिनै] LT',
            nextDay : '[गाबोन] LT',
            nextWeek : '[फैगौ] dddd, LT',
            lastDay : '[मैया] LT',
            lastWeek : '[थांनाय] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s सिम',
            past : '%s सिगां',
            s : 'दान्दिसे',
            ss : '%d सेकेण्ड',
            m : 'मिनिटसे',
            mm : '%d मिनिट',
            h : 'रिंगा',
            hh : '%d रिंगा',
            d : 'सानसे',
            dd : '%d दिन',
            M : 'दानसे',
            MM : '%d दान',
            y : 'बोसोरसे',
            yy : '%d बोसोर'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /मोना|फुं|सानजौफु|बेलासि/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'मोना') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'फुं') {
                return hour;
            } else if (meridiem === 'सानजौफु') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'बेलासि') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'मोना';
            } else if (hour < 10) {
                return 'फुं';
            } else if (hour < 17) {
                return 'सानजौफु';
            } else if (hour < 20) {
                return 'बेलासि';
            } else {
                return 'मोना';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return brx;

})));
