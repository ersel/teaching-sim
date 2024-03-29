System.register([], function () {
	'use strict';
	return {
		execute: function () {

			var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

			function createCommonjsModule(fn, basedir, module) {
				return module = {
				  path: basedir,
				  exports: {},
				  require: function (path, base) {
			      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			    }
				}, fn(module, module.exports), module.exports;
			}

			function commonjsRequire () {
				throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
			}

			var moment = createCommonjsModule(function (module, exports) {
			(function (global, factory) {
			     module.exports = factory() ;
			}(commonjsGlobal, (function () {
			    var hookCallback;

			    function hooks() {
			        return hookCallback.apply(null, arguments);
			    }

			    // This is done to register the method called with moment()
			    // without creating circular dependencies.
			    function setHookCallback(callback) {
			        hookCallback = callback;
			    }

			    function isArray(input) {
			        return (
			            input instanceof Array ||
			            Object.prototype.toString.call(input) === '[object Array]'
			        );
			    }

			    function isObject(input) {
			        // IE8 will treat undefined and null as object if it wasn't for
			        // input != null
			        return (
			            input != null &&
			            Object.prototype.toString.call(input) === '[object Object]'
			        );
			    }

			    function hasOwnProp(a, b) {
			        return Object.prototype.hasOwnProperty.call(a, b);
			    }

			    function isObjectEmpty(obj) {
			        if (Object.getOwnPropertyNames) {
			            return Object.getOwnPropertyNames(obj).length === 0;
			        } else {
			            var k;
			            for (k in obj) {
			                if (hasOwnProp(obj, k)) {
			                    return false;
			                }
			            }
			            return true;
			        }
			    }

			    function isUndefined(input) {
			        return input === void 0;
			    }

			    function isNumber(input) {
			        return (
			            typeof input === 'number' ||
			            Object.prototype.toString.call(input) === '[object Number]'
			        );
			    }

			    function isDate(input) {
			        return (
			            input instanceof Date ||
			            Object.prototype.toString.call(input) === '[object Date]'
			        );
			    }

			    function map(arr, fn) {
			        var res = [],
			            i;
			        for (i = 0; i < arr.length; ++i) {
			            res.push(fn(arr[i], i));
			        }
			        return res;
			    }

			    function extend(a, b) {
			        for (var i in b) {
			            if (hasOwnProp(b, i)) {
			                a[i] = b[i];
			            }
			        }

			        if (hasOwnProp(b, 'toString')) {
			            a.toString = b.toString;
			        }

			        if (hasOwnProp(b, 'valueOf')) {
			            a.valueOf = b.valueOf;
			        }

			        return a;
			    }

			    function createUTC(input, format, locale, strict) {
			        return createLocalOrUTC(input, format, locale, strict, true).utc();
			    }

			    function defaultParsingFlags() {
			        // We need to deep clone this object.
			        return {
			            empty: false,
			            unusedTokens: [],
			            unusedInput: [],
			            overflow: -2,
			            charsLeftOver: 0,
			            nullInput: false,
			            invalidEra: null,
			            invalidMonth: null,
			            invalidFormat: false,
			            userInvalidated: false,
			            iso: false,
			            parsedDateParts: [],
			            era: null,
			            meridiem: null,
			            rfc2822: false,
			            weekdayMismatch: false,
			        };
			    }

			    function getParsingFlags(m) {
			        if (m._pf == null) {
			            m._pf = defaultParsingFlags();
			        }
			        return m._pf;
			    }

			    var some;
			    if (Array.prototype.some) {
			        some = Array.prototype.some;
			    } else {
			        some = function (fun) {
			            var t = Object(this),
			                len = t.length >>> 0,
			                i;

			            for (i = 0; i < len; i++) {
			                if (i in t && fun.call(this, t[i], i, t)) {
			                    return true;
			                }
			            }

			            return false;
			        };
			    }

			    function isValid(m) {
			        if (m._isValid == null) {
			            var flags = getParsingFlags(m),
			                parsedParts = some.call(flags.parsedDateParts, function (i) {
			                    return i != null;
			                }),
			                isNowValid =
			                    !isNaN(m._d.getTime()) &&
			                    flags.overflow < 0 &&
			                    !flags.empty &&
			                    !flags.invalidEra &&
			                    !flags.invalidMonth &&
			                    !flags.invalidWeekday &&
			                    !flags.weekdayMismatch &&
			                    !flags.nullInput &&
			                    !flags.invalidFormat &&
			                    !flags.userInvalidated &&
			                    (!flags.meridiem || (flags.meridiem && parsedParts));

			            if (m._strict) {
			                isNowValid =
			                    isNowValid &&
			                    flags.charsLeftOver === 0 &&
			                    flags.unusedTokens.length === 0 &&
			                    flags.bigHour === undefined;
			            }

			            if (Object.isFrozen == null || !Object.isFrozen(m)) {
			                m._isValid = isNowValid;
			            } else {
			                return isNowValid;
			            }
			        }
			        return m._isValid;
			    }

			    function createInvalid(flags) {
			        var m = createUTC(NaN);
			        if (flags != null) {
			            extend(getParsingFlags(m), flags);
			        } else {
			            getParsingFlags(m).userInvalidated = true;
			        }

			        return m;
			    }

			    // Plugins that add properties should also add the key here (null value),
			    // so we can properly clone ourselves.
			    var momentProperties = (hooks.momentProperties = []),
			        updateInProgress = false;

			    function copyConfig(to, from) {
			        var i, prop, val;

			        if (!isUndefined(from._isAMomentObject)) {
			            to._isAMomentObject = from._isAMomentObject;
			        }
			        if (!isUndefined(from._i)) {
			            to._i = from._i;
			        }
			        if (!isUndefined(from._f)) {
			            to._f = from._f;
			        }
			        if (!isUndefined(from._l)) {
			            to._l = from._l;
			        }
			        if (!isUndefined(from._strict)) {
			            to._strict = from._strict;
			        }
			        if (!isUndefined(from._tzm)) {
			            to._tzm = from._tzm;
			        }
			        if (!isUndefined(from._isUTC)) {
			            to._isUTC = from._isUTC;
			        }
			        if (!isUndefined(from._offset)) {
			            to._offset = from._offset;
			        }
			        if (!isUndefined(from._pf)) {
			            to._pf = getParsingFlags(from);
			        }
			        if (!isUndefined(from._locale)) {
			            to._locale = from._locale;
			        }

			        if (momentProperties.length > 0) {
			            for (i = 0; i < momentProperties.length; i++) {
			                prop = momentProperties[i];
			                val = from[prop];
			                if (!isUndefined(val)) {
			                    to[prop] = val;
			                }
			            }
			        }

			        return to;
			    }

			    // Moment prototype object
			    function Moment(config) {
			        copyConfig(this, config);
			        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
			        if (!this.isValid()) {
			            this._d = new Date(NaN);
			        }
			        // Prevent infinite loop in case updateOffset creates new moment
			        // objects.
			        if (updateInProgress === false) {
			            updateInProgress = true;
			            hooks.updateOffset(this);
			            updateInProgress = false;
			        }
			    }

			    function isMoment(obj) {
			        return (
			            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
			        );
			    }

			    function warn(msg) {
			        if (
			            hooks.suppressDeprecationWarnings === false &&
			            typeof console !== 'undefined' &&
			            console.warn
			        ) {
			            console.warn('Deprecation warning: ' + msg);
			        }
			    }

			    function deprecate(msg, fn) {
			        var firstTime = true;

			        return extend(function () {
			            if (hooks.deprecationHandler != null) {
			                hooks.deprecationHandler(null, msg);
			            }
			            if (firstTime) {
			                var args = [],
			                    arg,
			                    i,
			                    key;
			                for (i = 0; i < arguments.length; i++) {
			                    arg = '';
			                    if (typeof arguments[i] === 'object') {
			                        arg += '\n[' + i + '] ';
			                        for (key in arguments[0]) {
			                            if (hasOwnProp(arguments[0], key)) {
			                                arg += key + ': ' + arguments[0][key] + ', ';
			                            }
			                        }
			                        arg = arg.slice(0, -2); // Remove trailing comma and space
			                    } else {
			                        arg = arguments[i];
			                    }
			                    args.push(arg);
			                }
			                warn(
			                    msg +
			                        '\nArguments: ' +
			                        Array.prototype.slice.call(args).join('') +
			                        '\n' +
			                        new Error().stack
			                );
			                firstTime = false;
			            }
			            return fn.apply(this, arguments);
			        }, fn);
			    }

			    var deprecations = {};

			    function deprecateSimple(name, msg) {
			        if (hooks.deprecationHandler != null) {
			            hooks.deprecationHandler(name, msg);
			        }
			        if (!deprecations[name]) {
			            warn(msg);
			            deprecations[name] = true;
			        }
			    }

			    hooks.suppressDeprecationWarnings = false;
			    hooks.deprecationHandler = null;

			    function isFunction(input) {
			        return (
			            (typeof Function !== 'undefined' && input instanceof Function) ||
			            Object.prototype.toString.call(input) === '[object Function]'
			        );
			    }

			    function set(config) {
			        var prop, i;
			        for (i in config) {
			            if (hasOwnProp(config, i)) {
			                prop = config[i];
			                if (isFunction(prop)) {
			                    this[i] = prop;
			                } else {
			                    this['_' + i] = prop;
			                }
			            }
			        }
			        this._config = config;
			        // Lenient ordinal parsing accepts just a number in addition to
			        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
			        // TODO: Remove "ordinalParse" fallback in next major release.
			        this._dayOfMonthOrdinalParseLenient = new RegExp(
			            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
			                '|' +
			                /\d{1,2}/.source
			        );
			    }

			    function mergeConfigs(parentConfig, childConfig) {
			        var res = extend({}, parentConfig),
			            prop;
			        for (prop in childConfig) {
			            if (hasOwnProp(childConfig, prop)) {
			                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
			                    res[prop] = {};
			                    extend(res[prop], parentConfig[prop]);
			                    extend(res[prop], childConfig[prop]);
			                } else if (childConfig[prop] != null) {
			                    res[prop] = childConfig[prop];
			                } else {
			                    delete res[prop];
			                }
			            }
			        }
			        for (prop in parentConfig) {
			            if (
			                hasOwnProp(parentConfig, prop) &&
			                !hasOwnProp(childConfig, prop) &&
			                isObject(parentConfig[prop])
			            ) {
			                // make sure changes to properties don't modify parent config
			                res[prop] = extend({}, res[prop]);
			            }
			        }
			        return res;
			    }

			    function Locale(config) {
			        if (config != null) {
			            this.set(config);
			        }
			    }

			    var keys;

			    if (Object.keys) {
			        keys = Object.keys;
			    } else {
			        keys = function (obj) {
			            var i,
			                res = [];
			            for (i in obj) {
			                if (hasOwnProp(obj, i)) {
			                    res.push(i);
			                }
			            }
			            return res;
			        };
			    }

			    var defaultCalendar = {
			        sameDay: '[Today at] LT',
			        nextDay: '[Tomorrow at] LT',
			        nextWeek: 'dddd [at] LT',
			        lastDay: '[Yesterday at] LT',
			        lastWeek: '[Last] dddd [at] LT',
			        sameElse: 'L',
			    };

			    function calendar(key, mom, now) {
			        var output = this._calendar[key] || this._calendar['sameElse'];
			        return isFunction(output) ? output.call(mom, now) : output;
			    }

			    function zeroFill(number, targetLength, forceSign) {
			        var absNumber = '' + Math.abs(number),
			            zerosToFill = targetLength - absNumber.length,
			            sign = number >= 0;
			        return (
			            (sign ? (forceSign ? '+' : '') : '-') +
			            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
			            absNumber
			        );
			    }

			    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
			        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
			        formatFunctions = {},
			        formatTokenFunctions = {};

			    // token:    'M'
			    // padded:   ['MM', 2]
			    // ordinal:  'Mo'
			    // callback: function () { this.month() + 1 }
			    function addFormatToken(token, padded, ordinal, callback) {
			        var func = callback;
			        if (typeof callback === 'string') {
			            func = function () {
			                return this[callback]();
			            };
			        }
			        if (token) {
			            formatTokenFunctions[token] = func;
			        }
			        if (padded) {
			            formatTokenFunctions[padded[0]] = function () {
			                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
			            };
			        }
			        if (ordinal) {
			            formatTokenFunctions[ordinal] = function () {
			                return this.localeData().ordinal(
			                    func.apply(this, arguments),
			                    token
			                );
			            };
			        }
			    }

			    function removeFormattingTokens(input) {
			        if (input.match(/\[[\s\S]/)) {
			            return input.replace(/^\[|\]$/g, '');
			        }
			        return input.replace(/\\/g, '');
			    }

			    function makeFormatFunction(format) {
			        var array = format.match(formattingTokens),
			            i,
			            length;

			        for (i = 0, length = array.length; i < length; i++) {
			            if (formatTokenFunctions[array[i]]) {
			                array[i] = formatTokenFunctions[array[i]];
			            } else {
			                array[i] = removeFormattingTokens(array[i]);
			            }
			        }

			        return function (mom) {
			            var output = '',
			                i;
			            for (i = 0; i < length; i++) {
			                output += isFunction(array[i])
			                    ? array[i].call(mom, format)
			                    : array[i];
			            }
			            return output;
			        };
			    }

			    // format date using native date object
			    function formatMoment(m, format) {
			        if (!m.isValid()) {
			            return m.localeData().invalidDate();
			        }

			        format = expandFormat(format, m.localeData());
			        formatFunctions[format] =
			            formatFunctions[format] || makeFormatFunction(format);

			        return formatFunctions[format](m);
			    }

			    function expandFormat(format, locale) {
			        var i = 5;

			        function replaceLongDateFormatTokens(input) {
			            return locale.longDateFormat(input) || input;
			        }

			        localFormattingTokens.lastIndex = 0;
			        while (i >= 0 && localFormattingTokens.test(format)) {
			            format = format.replace(
			                localFormattingTokens,
			                replaceLongDateFormatTokens
			            );
			            localFormattingTokens.lastIndex = 0;
			            i -= 1;
			        }

			        return format;
			    }

			    var defaultLongDateFormat = {
			        LTS: 'h:mm:ss A',
			        LT: 'h:mm A',
			        L: 'MM/DD/YYYY',
			        LL: 'MMMM D, YYYY',
			        LLL: 'MMMM D, YYYY h:mm A',
			        LLLL: 'dddd, MMMM D, YYYY h:mm A',
			    };

			    function longDateFormat(key) {
			        var format = this._longDateFormat[key],
			            formatUpper = this._longDateFormat[key.toUpperCase()];

			        if (format || !formatUpper) {
			            return format;
			        }

			        this._longDateFormat[key] = formatUpper
			            .match(formattingTokens)
			            .map(function (tok) {
			                if (
			                    tok === 'MMMM' ||
			                    tok === 'MM' ||
			                    tok === 'DD' ||
			                    tok === 'dddd'
			                ) {
			                    return tok.slice(1);
			                }
			                return tok;
			            })
			            .join('');

			        return this._longDateFormat[key];
			    }

			    var defaultInvalidDate = 'Invalid date';

			    function invalidDate() {
			        return this._invalidDate;
			    }

			    var defaultOrdinal = '%d',
			        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

			    function ordinal(number) {
			        return this._ordinal.replace('%d', number);
			    }

			    var defaultRelativeTime = {
			        future: 'in %s',
			        past: '%s ago',
			        s: 'a few seconds',
			        ss: '%d seconds',
			        m: 'a minute',
			        mm: '%d minutes',
			        h: 'an hour',
			        hh: '%d hours',
			        d: 'a day',
			        dd: '%d days',
			        w: 'a week',
			        ww: '%d weeks',
			        M: 'a month',
			        MM: '%d months',
			        y: 'a year',
			        yy: '%d years',
			    };

			    function relativeTime(number, withoutSuffix, string, isFuture) {
			        var output = this._relativeTime[string];
			        return isFunction(output)
			            ? output(number, withoutSuffix, string, isFuture)
			            : output.replace(/%d/i, number);
			    }

			    function pastFuture(diff, output) {
			        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
			        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
			    }

			    var aliases = {};

			    function addUnitAlias(unit, shorthand) {
			        var lowerCase = unit.toLowerCase();
			        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
			    }

			    function normalizeUnits(units) {
			        return typeof units === 'string'
			            ? aliases[units] || aliases[units.toLowerCase()]
			            : undefined;
			    }

			    function normalizeObjectUnits(inputObject) {
			        var normalizedInput = {},
			            normalizedProp,
			            prop;

			        for (prop in inputObject) {
			            if (hasOwnProp(inputObject, prop)) {
			                normalizedProp = normalizeUnits(prop);
			                if (normalizedProp) {
			                    normalizedInput[normalizedProp] = inputObject[prop];
			                }
			            }
			        }

			        return normalizedInput;
			    }

			    var priorities = {};

			    function addUnitPriority(unit, priority) {
			        priorities[unit] = priority;
			    }

			    function getPrioritizedUnits(unitsObj) {
			        var units = [],
			            u;
			        for (u in unitsObj) {
			            if (hasOwnProp(unitsObj, u)) {
			                units.push({ unit: u, priority: priorities[u] });
			            }
			        }
			        units.sort(function (a, b) {
			            return a.priority - b.priority;
			        });
			        return units;
			    }

			    function isLeapYear(year) {
			        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
			    }

			    function absFloor(number) {
			        if (number < 0) {
			            // -0 -> 0
			            return Math.ceil(number) || 0;
			        } else {
			            return Math.floor(number);
			        }
			    }

			    function toInt(argumentForCoercion) {
			        var coercedNumber = +argumentForCoercion,
			            value = 0;

			        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
			            value = absFloor(coercedNumber);
			        }

			        return value;
			    }

			    function makeGetSet(unit, keepTime) {
			        return function (value) {
			            if (value != null) {
			                set$1(this, unit, value);
			                hooks.updateOffset(this, keepTime);
			                return this;
			            } else {
			                return get(this, unit);
			            }
			        };
			    }

			    function get(mom, unit) {
			        return mom.isValid()
			            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
			            : NaN;
			    }

			    function set$1(mom, unit, value) {
			        if (mom.isValid() && !isNaN(value)) {
			            if (
			                unit === 'FullYear' &&
			                isLeapYear(mom.year()) &&
			                mom.month() === 1 &&
			                mom.date() === 29
			            ) {
			                value = toInt(value);
			                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
			                    value,
			                    mom.month(),
			                    daysInMonth(value, mom.month())
			                );
			            } else {
			                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
			            }
			        }
			    }

			    // MOMENTS

			    function stringGet(units) {
			        units = normalizeUnits(units);
			        if (isFunction(this[units])) {
			            return this[units]();
			        }
			        return this;
			    }

			    function stringSet(units, value) {
			        if (typeof units === 'object') {
			            units = normalizeObjectUnits(units);
			            var prioritized = getPrioritizedUnits(units),
			                i;
			            for (i = 0; i < prioritized.length; i++) {
			                this[prioritized[i].unit](units[prioritized[i].unit]);
			            }
			        } else {
			            units = normalizeUnits(units);
			            if (isFunction(this[units])) {
			                return this[units](value);
			            }
			        }
			        return this;
			    }

			    var match1 = /\d/, //       0 - 9
			        match2 = /\d\d/, //      00 - 99
			        match3 = /\d{3}/, //     000 - 999
			        match4 = /\d{4}/, //    0000 - 9999
			        match6 = /[+-]?\d{6}/, // -999999 - 999999
			        match1to2 = /\d\d?/, //       0 - 99
			        match3to4 = /\d\d\d\d?/, //     999 - 9999
			        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
			        match1to3 = /\d{1,3}/, //       0 - 999
			        match1to4 = /\d{1,4}/, //       0 - 9999
			        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
			        matchUnsigned = /\d+/, //       0 - inf
			        matchSigned = /[+-]?\d+/, //    -inf - inf
			        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
			        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
			        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
			        // any word (or two) characters or numbers including two/three word month in arabic.
			        // includes scottish gaelic two word and hyphenated months
			        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
			        regexes;

			    regexes = {};

			    function addRegexToken(token, regex, strictRegex) {
			        regexes[token] = isFunction(regex)
			            ? regex
			            : function (isStrict, localeData) {
			                  return isStrict && strictRegex ? strictRegex : regex;
			              };
			    }

			    function getParseRegexForToken(token, config) {
			        if (!hasOwnProp(regexes, token)) {
			            return new RegExp(unescapeFormat(token));
			        }

			        return regexes[token](config._strict, config._locale);
			    }

			    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
			    function unescapeFormat(s) {
			        return regexEscape(
			            s
			                .replace('\\', '')
			                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
			                    matched,
			                    p1,
			                    p2,
			                    p3,
			                    p4
			                ) {
			                    return p1 || p2 || p3 || p4;
			                })
			        );
			    }

			    function regexEscape(s) {
			        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
			    }

			    var tokens = {};

			    function addParseToken(token, callback) {
			        var i,
			            func = callback;
			        if (typeof token === 'string') {
			            token = [token];
			        }
			        if (isNumber(callback)) {
			            func = function (input, array) {
			                array[callback] = toInt(input);
			            };
			        }
			        for (i = 0; i < token.length; i++) {
			            tokens[token[i]] = func;
			        }
			    }

			    function addWeekParseToken(token, callback) {
			        addParseToken(token, function (input, array, config, token) {
			            config._w = config._w || {};
			            callback(input, config._w, config, token);
			        });
			    }

			    function addTimeToArrayFromToken(token, input, config) {
			        if (input != null && hasOwnProp(tokens, token)) {
			            tokens[token](input, config._a, config, token);
			        }
			    }

			    var YEAR = 0,
			        MONTH = 1,
			        DATE = 2,
			        HOUR = 3,
			        MINUTE = 4,
			        SECOND = 5,
			        MILLISECOND = 6,
			        WEEK = 7,
			        WEEKDAY = 8;

			    function mod(n, x) {
			        return ((n % x) + x) % x;
			    }

			    var indexOf;

			    if (Array.prototype.indexOf) {
			        indexOf = Array.prototype.indexOf;
			    } else {
			        indexOf = function (o) {
			            // I know
			            var i;
			            for (i = 0; i < this.length; ++i) {
			                if (this[i] === o) {
			                    return i;
			                }
			            }
			            return -1;
			        };
			    }

			    function daysInMonth(year, month) {
			        if (isNaN(year) || isNaN(month)) {
			            return NaN;
			        }
			        var modMonth = mod(month, 12);
			        year += (month - modMonth) / 12;
			        return modMonth === 1
			            ? isLeapYear(year)
			                ? 29
			                : 28
			            : 31 - ((modMonth % 7) % 2);
			    }

			    // FORMATTING

			    addFormatToken('M', ['MM', 2], 'Mo', function () {
			        return this.month() + 1;
			    });

			    addFormatToken('MMM', 0, 0, function (format) {
			        return this.localeData().monthsShort(this, format);
			    });

			    addFormatToken('MMMM', 0, 0, function (format) {
			        return this.localeData().months(this, format);
			    });

			    // ALIASES

			    addUnitAlias('month', 'M');

			    // PRIORITY

			    addUnitPriority('month', 8);

			    // PARSING

			    addRegexToken('M', match1to2);
			    addRegexToken('MM', match1to2, match2);
			    addRegexToken('MMM', function (isStrict, locale) {
			        return locale.monthsShortRegex(isStrict);
			    });
			    addRegexToken('MMMM', function (isStrict, locale) {
			        return locale.monthsRegex(isStrict);
			    });

			    addParseToken(['M', 'MM'], function (input, array) {
			        array[MONTH] = toInt(input) - 1;
			    });

			    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
			        var month = config._locale.monthsParse(input, token, config._strict);
			        // if we didn't find a month name, mark the date as invalid.
			        if (month != null) {
			            array[MONTH] = month;
			        } else {
			            getParsingFlags(config).invalidMonth = input;
			        }
			    });

			    // LOCALES

			    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
			            '_'
			        ),
			        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
			            '_'
			        ),
			        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
			        defaultMonthsShortRegex = matchWord,
			        defaultMonthsRegex = matchWord;

			    function localeMonths(m, format) {
			        if (!m) {
			            return isArray(this._months)
			                ? this._months
			                : this._months['standalone'];
			        }
			        return isArray(this._months)
			            ? this._months[m.month()]
			            : this._months[
			                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
			                      ? 'format'
			                      : 'standalone'
			              ][m.month()];
			    }

			    function localeMonthsShort(m, format) {
			        if (!m) {
			            return isArray(this._monthsShort)
			                ? this._monthsShort
			                : this._monthsShort['standalone'];
			        }
			        return isArray(this._monthsShort)
			            ? this._monthsShort[m.month()]
			            : this._monthsShort[
			                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
			              ][m.month()];
			    }

			    function handleStrictParse(monthName, format, strict) {
			        var i,
			            ii,
			            mom,
			            llc = monthName.toLocaleLowerCase();
			        if (!this._monthsParse) {
			            // this is not used
			            this._monthsParse = [];
			            this._longMonthsParse = [];
			            this._shortMonthsParse = [];
			            for (i = 0; i < 12; ++i) {
			                mom = createUTC([2000, i]);
			                this._shortMonthsParse[i] = this.monthsShort(
			                    mom,
			                    ''
			                ).toLocaleLowerCase();
			                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
			            }
			        }

			        if (strict) {
			            if (format === 'MMM') {
			                ii = indexOf.call(this._shortMonthsParse, llc);
			                return ii !== -1 ? ii : null;
			            } else {
			                ii = indexOf.call(this._longMonthsParse, llc);
			                return ii !== -1 ? ii : null;
			            }
			        } else {
			            if (format === 'MMM') {
			                ii = indexOf.call(this._shortMonthsParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._longMonthsParse, llc);
			                return ii !== -1 ? ii : null;
			            } else {
			                ii = indexOf.call(this._longMonthsParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._shortMonthsParse, llc);
			                return ii !== -1 ? ii : null;
			            }
			        }
			    }

			    function localeMonthsParse(monthName, format, strict) {
			        var i, mom, regex;

			        if (this._monthsParseExact) {
			            return handleStrictParse.call(this, monthName, format, strict);
			        }

			        if (!this._monthsParse) {
			            this._monthsParse = [];
			            this._longMonthsParse = [];
			            this._shortMonthsParse = [];
			        }

			        // TODO: add sorting
			        // Sorting makes sure if one month (or abbr) is a prefix of another
			        // see sorting in computeMonthsParse
			        for (i = 0; i < 12; i++) {
			            // make the regex if we don't have it already
			            mom = createUTC([2000, i]);
			            if (strict && !this._longMonthsParse[i]) {
			                this._longMonthsParse[i] = new RegExp(
			                    '^' + this.months(mom, '').replace('.', '') + '$',
			                    'i'
			                );
			                this._shortMonthsParse[i] = new RegExp(
			                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
			                    'i'
			                );
			            }
			            if (!strict && !this._monthsParse[i]) {
			                regex =
			                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
			                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
			            }
			            // test the regex
			            if (
			                strict &&
			                format === 'MMMM' &&
			                this._longMonthsParse[i].test(monthName)
			            ) {
			                return i;
			            } else if (
			                strict &&
			                format === 'MMM' &&
			                this._shortMonthsParse[i].test(monthName)
			            ) {
			                return i;
			            } else if (!strict && this._monthsParse[i].test(monthName)) {
			                return i;
			            }
			        }
			    }

			    // MOMENTS

			    function setMonth(mom, value) {
			        var dayOfMonth;

			        if (!mom.isValid()) {
			            // No op
			            return mom;
			        }

			        if (typeof value === 'string') {
			            if (/^\d+$/.test(value)) {
			                value = toInt(value);
			            } else {
			                value = mom.localeData().monthsParse(value);
			                // TODO: Another silent failure?
			                if (!isNumber(value)) {
			                    return mom;
			                }
			            }
			        }

			        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
			        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
			        return mom;
			    }

			    function getSetMonth(value) {
			        if (value != null) {
			            setMonth(this, value);
			            hooks.updateOffset(this, true);
			            return this;
			        } else {
			            return get(this, 'Month');
			        }
			    }

			    function getDaysInMonth() {
			        return daysInMonth(this.year(), this.month());
			    }

			    function monthsShortRegex(isStrict) {
			        if (this._monthsParseExact) {
			            if (!hasOwnProp(this, '_monthsRegex')) {
			                computeMonthsParse.call(this);
			            }
			            if (isStrict) {
			                return this._monthsShortStrictRegex;
			            } else {
			                return this._monthsShortRegex;
			            }
			        } else {
			            if (!hasOwnProp(this, '_monthsShortRegex')) {
			                this._monthsShortRegex = defaultMonthsShortRegex;
			            }
			            return this._monthsShortStrictRegex && isStrict
			                ? this._monthsShortStrictRegex
			                : this._monthsShortRegex;
			        }
			    }

			    function monthsRegex(isStrict) {
			        if (this._monthsParseExact) {
			            if (!hasOwnProp(this, '_monthsRegex')) {
			                computeMonthsParse.call(this);
			            }
			            if (isStrict) {
			                return this._monthsStrictRegex;
			            } else {
			                return this._monthsRegex;
			            }
			        } else {
			            if (!hasOwnProp(this, '_monthsRegex')) {
			                this._monthsRegex = defaultMonthsRegex;
			            }
			            return this._monthsStrictRegex && isStrict
			                ? this._monthsStrictRegex
			                : this._monthsRegex;
			        }
			    }

			    function computeMonthsParse() {
			        function cmpLenRev(a, b) {
			            return b.length - a.length;
			        }

			        var shortPieces = [],
			            longPieces = [],
			            mixedPieces = [],
			            i,
			            mom;
			        for (i = 0; i < 12; i++) {
			            // make the regex if we don't have it already
			            mom = createUTC([2000, i]);
			            shortPieces.push(this.monthsShort(mom, ''));
			            longPieces.push(this.months(mom, ''));
			            mixedPieces.push(this.months(mom, ''));
			            mixedPieces.push(this.monthsShort(mom, ''));
			        }
			        // Sorting makes sure if one month (or abbr) is a prefix of another it
			        // will match the longer piece.
			        shortPieces.sort(cmpLenRev);
			        longPieces.sort(cmpLenRev);
			        mixedPieces.sort(cmpLenRev);
			        for (i = 0; i < 12; i++) {
			            shortPieces[i] = regexEscape(shortPieces[i]);
			            longPieces[i] = regexEscape(longPieces[i]);
			        }
			        for (i = 0; i < 24; i++) {
			            mixedPieces[i] = regexEscape(mixedPieces[i]);
			        }

			        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
			        this._monthsShortRegex = this._monthsRegex;
			        this._monthsStrictRegex = new RegExp(
			            '^(' + longPieces.join('|') + ')',
			            'i'
			        );
			        this._monthsShortStrictRegex = new RegExp(
			            '^(' + shortPieces.join('|') + ')',
			            'i'
			        );
			    }

			    // FORMATTING

			    addFormatToken('Y', 0, 0, function () {
			        var y = this.year();
			        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
			    });

			    addFormatToken(0, ['YY', 2], 0, function () {
			        return this.year() % 100;
			    });

			    addFormatToken(0, ['YYYY', 4], 0, 'year');
			    addFormatToken(0, ['YYYYY', 5], 0, 'year');
			    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

			    // ALIASES

			    addUnitAlias('year', 'y');

			    // PRIORITIES

			    addUnitPriority('year', 1);

			    // PARSING

			    addRegexToken('Y', matchSigned);
			    addRegexToken('YY', match1to2, match2);
			    addRegexToken('YYYY', match1to4, match4);
			    addRegexToken('YYYYY', match1to6, match6);
			    addRegexToken('YYYYYY', match1to6, match6);

			    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
			    addParseToken('YYYY', function (input, array) {
			        array[YEAR] =
			            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
			    });
			    addParseToken('YY', function (input, array) {
			        array[YEAR] = hooks.parseTwoDigitYear(input);
			    });
			    addParseToken('Y', function (input, array) {
			        array[YEAR] = parseInt(input, 10);
			    });

			    // HELPERS

			    function daysInYear(year) {
			        return isLeapYear(year) ? 366 : 365;
			    }

			    // HOOKS

			    hooks.parseTwoDigitYear = function (input) {
			        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
			    };

			    // MOMENTS

			    var getSetYear = makeGetSet('FullYear', true);

			    function getIsLeapYear() {
			        return isLeapYear(this.year());
			    }

			    function createDate(y, m, d, h, M, s, ms) {
			        // can't just apply() to create a date:
			        // https://stackoverflow.com/q/181348
			        var date;
			        // the date constructor remaps years 0-99 to 1900-1999
			        if (y < 100 && y >= 0) {
			            // preserve leap years using a full 400 year cycle, then reset
			            date = new Date(y + 400, m, d, h, M, s, ms);
			            if (isFinite(date.getFullYear())) {
			                date.setFullYear(y);
			            }
			        } else {
			            date = new Date(y, m, d, h, M, s, ms);
			        }

			        return date;
			    }

			    function createUTCDate(y) {
			        var date, args;
			        // the Date.UTC function remaps years 0-99 to 1900-1999
			        if (y < 100 && y >= 0) {
			            args = Array.prototype.slice.call(arguments);
			            // preserve leap years using a full 400 year cycle, then reset
			            args[0] = y + 400;
			            date = new Date(Date.UTC.apply(null, args));
			            if (isFinite(date.getUTCFullYear())) {
			                date.setUTCFullYear(y);
			            }
			        } else {
			            date = new Date(Date.UTC.apply(null, arguments));
			        }

			        return date;
			    }

			    // start-of-first-week - start-of-year
			    function firstWeekOffset(year, dow, doy) {
			        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
			            fwd = 7 + dow - doy,
			            // first-week day local weekday -- which local weekday is fwd
			            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

			        return -fwdlw + fwd - 1;
			    }

			    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
			    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
			        var localWeekday = (7 + weekday - dow) % 7,
			            weekOffset = firstWeekOffset(year, dow, doy),
			            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
			            resYear,
			            resDayOfYear;

			        if (dayOfYear <= 0) {
			            resYear = year - 1;
			            resDayOfYear = daysInYear(resYear) + dayOfYear;
			        } else if (dayOfYear > daysInYear(year)) {
			            resYear = year + 1;
			            resDayOfYear = dayOfYear - daysInYear(year);
			        } else {
			            resYear = year;
			            resDayOfYear = dayOfYear;
			        }

			        return {
			            year: resYear,
			            dayOfYear: resDayOfYear,
			        };
			    }

			    function weekOfYear(mom, dow, doy) {
			        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
			            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
			            resWeek,
			            resYear;

			        if (week < 1) {
			            resYear = mom.year() - 1;
			            resWeek = week + weeksInYear(resYear, dow, doy);
			        } else if (week > weeksInYear(mom.year(), dow, doy)) {
			            resWeek = week - weeksInYear(mom.year(), dow, doy);
			            resYear = mom.year() + 1;
			        } else {
			            resYear = mom.year();
			            resWeek = week;
			        }

			        return {
			            week: resWeek,
			            year: resYear,
			        };
			    }

			    function weeksInYear(year, dow, doy) {
			        var weekOffset = firstWeekOffset(year, dow, doy),
			            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
			        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
			    }

			    // FORMATTING

			    addFormatToken('w', ['ww', 2], 'wo', 'week');
			    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

			    // ALIASES

			    addUnitAlias('week', 'w');
			    addUnitAlias('isoWeek', 'W');

			    // PRIORITIES

			    addUnitPriority('week', 5);
			    addUnitPriority('isoWeek', 5);

			    // PARSING

			    addRegexToken('w', match1to2);
			    addRegexToken('ww', match1to2, match2);
			    addRegexToken('W', match1to2);
			    addRegexToken('WW', match1to2, match2);

			    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
			        input,
			        week,
			        config,
			        token
			    ) {
			        week[token.substr(0, 1)] = toInt(input);
			    });

			    // HELPERS

			    // LOCALES

			    function localeWeek(mom) {
			        return weekOfYear(mom, this._week.dow, this._week.doy).week;
			    }

			    var defaultLocaleWeek = {
			        dow: 0, // Sunday is the first day of the week.
			        doy: 6, // The week that contains Jan 6th is the first week of the year.
			    };

			    function localeFirstDayOfWeek() {
			        return this._week.dow;
			    }

			    function localeFirstDayOfYear() {
			        return this._week.doy;
			    }

			    // MOMENTS

			    function getSetWeek(input) {
			        var week = this.localeData().week(this);
			        return input == null ? week : this.add((input - week) * 7, 'd');
			    }

			    function getSetISOWeek(input) {
			        var week = weekOfYear(this, 1, 4).week;
			        return input == null ? week : this.add((input - week) * 7, 'd');
			    }

			    // FORMATTING

			    addFormatToken('d', 0, 'do', 'day');

			    addFormatToken('dd', 0, 0, function (format) {
			        return this.localeData().weekdaysMin(this, format);
			    });

			    addFormatToken('ddd', 0, 0, function (format) {
			        return this.localeData().weekdaysShort(this, format);
			    });

			    addFormatToken('dddd', 0, 0, function (format) {
			        return this.localeData().weekdays(this, format);
			    });

			    addFormatToken('e', 0, 0, 'weekday');
			    addFormatToken('E', 0, 0, 'isoWeekday');

			    // ALIASES

			    addUnitAlias('day', 'd');
			    addUnitAlias('weekday', 'e');
			    addUnitAlias('isoWeekday', 'E');

			    // PRIORITY
			    addUnitPriority('day', 11);
			    addUnitPriority('weekday', 11);
			    addUnitPriority('isoWeekday', 11);

			    // PARSING

			    addRegexToken('d', match1to2);
			    addRegexToken('e', match1to2);
			    addRegexToken('E', match1to2);
			    addRegexToken('dd', function (isStrict, locale) {
			        return locale.weekdaysMinRegex(isStrict);
			    });
			    addRegexToken('ddd', function (isStrict, locale) {
			        return locale.weekdaysShortRegex(isStrict);
			    });
			    addRegexToken('dddd', function (isStrict, locale) {
			        return locale.weekdaysRegex(isStrict);
			    });

			    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
			        var weekday = config._locale.weekdaysParse(input, token, config._strict);
			        // if we didn't get a weekday name, mark the date as invalid
			        if (weekday != null) {
			            week.d = weekday;
			        } else {
			            getParsingFlags(config).invalidWeekday = input;
			        }
			    });

			    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
			        week[token] = toInt(input);
			    });

			    // HELPERS

			    function parseWeekday(input, locale) {
			        if (typeof input !== 'string') {
			            return input;
			        }

			        if (!isNaN(input)) {
			            return parseInt(input, 10);
			        }

			        input = locale.weekdaysParse(input);
			        if (typeof input === 'number') {
			            return input;
			        }

			        return null;
			    }

			    function parseIsoWeekday(input, locale) {
			        if (typeof input === 'string') {
			            return locale.weekdaysParse(input) % 7 || 7;
			        }
			        return isNaN(input) ? null : input;
			    }

			    // LOCALES
			    function shiftWeekdays(ws, n) {
			        return ws.slice(n, 7).concat(ws.slice(0, n));
			    }

			    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
			            '_'
			        ),
			        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
			        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
			        defaultWeekdaysRegex = matchWord,
			        defaultWeekdaysShortRegex = matchWord,
			        defaultWeekdaysMinRegex = matchWord;

			    function localeWeekdays(m, format) {
			        var weekdays = isArray(this._weekdays)
			            ? this._weekdays
			            : this._weekdays[
			                  m && m !== true && this._weekdays.isFormat.test(format)
			                      ? 'format'
			                      : 'standalone'
			              ];
			        return m === true
			            ? shiftWeekdays(weekdays, this._week.dow)
			            : m
			            ? weekdays[m.day()]
			            : weekdays;
			    }

			    function localeWeekdaysShort(m) {
			        return m === true
			            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
			            : m
			            ? this._weekdaysShort[m.day()]
			            : this._weekdaysShort;
			    }

			    function localeWeekdaysMin(m) {
			        return m === true
			            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
			            : m
			            ? this._weekdaysMin[m.day()]
			            : this._weekdaysMin;
			    }

			    function handleStrictParse$1(weekdayName, format, strict) {
			        var i,
			            ii,
			            mom,
			            llc = weekdayName.toLocaleLowerCase();
			        if (!this._weekdaysParse) {
			            this._weekdaysParse = [];
			            this._shortWeekdaysParse = [];
			            this._minWeekdaysParse = [];

			            for (i = 0; i < 7; ++i) {
			                mom = createUTC([2000, 1]).day(i);
			                this._minWeekdaysParse[i] = this.weekdaysMin(
			                    mom,
			                    ''
			                ).toLocaleLowerCase();
			                this._shortWeekdaysParse[i] = this.weekdaysShort(
			                    mom,
			                    ''
			                ).toLocaleLowerCase();
			                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
			            }
			        }

			        if (strict) {
			            if (format === 'dddd') {
			                ii = indexOf.call(this._weekdaysParse, llc);
			                return ii !== -1 ? ii : null;
			            } else if (format === 'ddd') {
			                ii = indexOf.call(this._shortWeekdaysParse, llc);
			                return ii !== -1 ? ii : null;
			            } else {
			                ii = indexOf.call(this._minWeekdaysParse, llc);
			                return ii !== -1 ? ii : null;
			            }
			        } else {
			            if (format === 'dddd') {
			                ii = indexOf.call(this._weekdaysParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._shortWeekdaysParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._minWeekdaysParse, llc);
			                return ii !== -1 ? ii : null;
			            } else if (format === 'ddd') {
			                ii = indexOf.call(this._shortWeekdaysParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._weekdaysParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._minWeekdaysParse, llc);
			                return ii !== -1 ? ii : null;
			            } else {
			                ii = indexOf.call(this._minWeekdaysParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._weekdaysParse, llc);
			                if (ii !== -1) {
			                    return ii;
			                }
			                ii = indexOf.call(this._shortWeekdaysParse, llc);
			                return ii !== -1 ? ii : null;
			            }
			        }
			    }

			    function localeWeekdaysParse(weekdayName, format, strict) {
			        var i, mom, regex;

			        if (this._weekdaysParseExact) {
			            return handleStrictParse$1.call(this, weekdayName, format, strict);
			        }

			        if (!this._weekdaysParse) {
			            this._weekdaysParse = [];
			            this._minWeekdaysParse = [];
			            this._shortWeekdaysParse = [];
			            this._fullWeekdaysParse = [];
			        }

			        for (i = 0; i < 7; i++) {
			            // make the regex if we don't have it already

			            mom = createUTC([2000, 1]).day(i);
			            if (strict && !this._fullWeekdaysParse[i]) {
			                this._fullWeekdaysParse[i] = new RegExp(
			                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
			                    'i'
			                );
			                this._shortWeekdaysParse[i] = new RegExp(
			                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
			                    'i'
			                );
			                this._minWeekdaysParse[i] = new RegExp(
			                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
			                    'i'
			                );
			            }
			            if (!this._weekdaysParse[i]) {
			                regex =
			                    '^' +
			                    this.weekdays(mom, '') +
			                    '|^' +
			                    this.weekdaysShort(mom, '') +
			                    '|^' +
			                    this.weekdaysMin(mom, '');
			                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
			            }
			            // test the regex
			            if (
			                strict &&
			                format === 'dddd' &&
			                this._fullWeekdaysParse[i].test(weekdayName)
			            ) {
			                return i;
			            } else if (
			                strict &&
			                format === 'ddd' &&
			                this._shortWeekdaysParse[i].test(weekdayName)
			            ) {
			                return i;
			            } else if (
			                strict &&
			                format === 'dd' &&
			                this._minWeekdaysParse[i].test(weekdayName)
			            ) {
			                return i;
			            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
			                return i;
			            }
			        }
			    }

			    // MOMENTS

			    function getSetDayOfWeek(input) {
			        if (!this.isValid()) {
			            return input != null ? this : NaN;
			        }
			        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			        if (input != null) {
			            input = parseWeekday(input, this.localeData());
			            return this.add(input - day, 'd');
			        } else {
			            return day;
			        }
			    }

			    function getSetLocaleDayOfWeek(input) {
			        if (!this.isValid()) {
			            return input != null ? this : NaN;
			        }
			        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
			        return input == null ? weekday : this.add(input - weekday, 'd');
			    }

			    function getSetISODayOfWeek(input) {
			        if (!this.isValid()) {
			            return input != null ? this : NaN;
			        }

			        // behaves the same as moment#day except
			        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
			        // as a setter, sunday should belong to the previous week.

			        if (input != null) {
			            var weekday = parseIsoWeekday(input, this.localeData());
			            return this.day(this.day() % 7 ? weekday : weekday - 7);
			        } else {
			            return this.day() || 7;
			        }
			    }

			    function weekdaysRegex(isStrict) {
			        if (this._weekdaysParseExact) {
			            if (!hasOwnProp(this, '_weekdaysRegex')) {
			                computeWeekdaysParse.call(this);
			            }
			            if (isStrict) {
			                return this._weekdaysStrictRegex;
			            } else {
			                return this._weekdaysRegex;
			            }
			        } else {
			            if (!hasOwnProp(this, '_weekdaysRegex')) {
			                this._weekdaysRegex = defaultWeekdaysRegex;
			            }
			            return this._weekdaysStrictRegex && isStrict
			                ? this._weekdaysStrictRegex
			                : this._weekdaysRegex;
			        }
			    }

			    function weekdaysShortRegex(isStrict) {
			        if (this._weekdaysParseExact) {
			            if (!hasOwnProp(this, '_weekdaysRegex')) {
			                computeWeekdaysParse.call(this);
			            }
			            if (isStrict) {
			                return this._weekdaysShortStrictRegex;
			            } else {
			                return this._weekdaysShortRegex;
			            }
			        } else {
			            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
			                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
			            }
			            return this._weekdaysShortStrictRegex && isStrict
			                ? this._weekdaysShortStrictRegex
			                : this._weekdaysShortRegex;
			        }
			    }

			    function weekdaysMinRegex(isStrict) {
			        if (this._weekdaysParseExact) {
			            if (!hasOwnProp(this, '_weekdaysRegex')) {
			                computeWeekdaysParse.call(this);
			            }
			            if (isStrict) {
			                return this._weekdaysMinStrictRegex;
			            } else {
			                return this._weekdaysMinRegex;
			            }
			        } else {
			            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
			                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
			            }
			            return this._weekdaysMinStrictRegex && isStrict
			                ? this._weekdaysMinStrictRegex
			                : this._weekdaysMinRegex;
			        }
			    }

			    function computeWeekdaysParse() {
			        function cmpLenRev(a, b) {
			            return b.length - a.length;
			        }

			        var minPieces = [],
			            shortPieces = [],
			            longPieces = [],
			            mixedPieces = [],
			            i,
			            mom,
			            minp,
			            shortp,
			            longp;
			        for (i = 0; i < 7; i++) {
			            // make the regex if we don't have it already
			            mom = createUTC([2000, 1]).day(i);
			            minp = regexEscape(this.weekdaysMin(mom, ''));
			            shortp = regexEscape(this.weekdaysShort(mom, ''));
			            longp = regexEscape(this.weekdays(mom, ''));
			            minPieces.push(minp);
			            shortPieces.push(shortp);
			            longPieces.push(longp);
			            mixedPieces.push(minp);
			            mixedPieces.push(shortp);
			            mixedPieces.push(longp);
			        }
			        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
			        // will match the longer piece.
			        minPieces.sort(cmpLenRev);
			        shortPieces.sort(cmpLenRev);
			        longPieces.sort(cmpLenRev);
			        mixedPieces.sort(cmpLenRev);

			        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
			        this._weekdaysShortRegex = this._weekdaysRegex;
			        this._weekdaysMinRegex = this._weekdaysRegex;

			        this._weekdaysStrictRegex = new RegExp(
			            '^(' + longPieces.join('|') + ')',
			            'i'
			        );
			        this._weekdaysShortStrictRegex = new RegExp(
			            '^(' + shortPieces.join('|') + ')',
			            'i'
			        );
			        this._weekdaysMinStrictRegex = new RegExp(
			            '^(' + minPieces.join('|') + ')',
			            'i'
			        );
			    }

			    // FORMATTING

			    function hFormat() {
			        return this.hours() % 12 || 12;
			    }

			    function kFormat() {
			        return this.hours() || 24;
			    }

			    addFormatToken('H', ['HH', 2], 0, 'hour');
			    addFormatToken('h', ['hh', 2], 0, hFormat);
			    addFormatToken('k', ['kk', 2], 0, kFormat);

			    addFormatToken('hmm', 0, 0, function () {
			        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
			    });

			    addFormatToken('hmmss', 0, 0, function () {
			        return (
			            '' +
			            hFormat.apply(this) +
			            zeroFill(this.minutes(), 2) +
			            zeroFill(this.seconds(), 2)
			        );
			    });

			    addFormatToken('Hmm', 0, 0, function () {
			        return '' + this.hours() + zeroFill(this.minutes(), 2);
			    });

			    addFormatToken('Hmmss', 0, 0, function () {
			        return (
			            '' +
			            this.hours() +
			            zeroFill(this.minutes(), 2) +
			            zeroFill(this.seconds(), 2)
			        );
			    });

			    function meridiem(token, lowercase) {
			        addFormatToken(token, 0, 0, function () {
			            return this.localeData().meridiem(
			                this.hours(),
			                this.minutes(),
			                lowercase
			            );
			        });
			    }

			    meridiem('a', true);
			    meridiem('A', false);

			    // ALIASES

			    addUnitAlias('hour', 'h');

			    // PRIORITY
			    addUnitPriority('hour', 13);

			    // PARSING

			    function matchMeridiem(isStrict, locale) {
			        return locale._meridiemParse;
			    }

			    addRegexToken('a', matchMeridiem);
			    addRegexToken('A', matchMeridiem);
			    addRegexToken('H', match1to2);
			    addRegexToken('h', match1to2);
			    addRegexToken('k', match1to2);
			    addRegexToken('HH', match1to2, match2);
			    addRegexToken('hh', match1to2, match2);
			    addRegexToken('kk', match1to2, match2);

			    addRegexToken('hmm', match3to4);
			    addRegexToken('hmmss', match5to6);
			    addRegexToken('Hmm', match3to4);
			    addRegexToken('Hmmss', match5to6);

			    addParseToken(['H', 'HH'], HOUR);
			    addParseToken(['k', 'kk'], function (input, array, config) {
			        var kInput = toInt(input);
			        array[HOUR] = kInput === 24 ? 0 : kInput;
			    });
			    addParseToken(['a', 'A'], function (input, array, config) {
			        config._isPm = config._locale.isPM(input);
			        config._meridiem = input;
			    });
			    addParseToken(['h', 'hh'], function (input, array, config) {
			        array[HOUR] = toInt(input);
			        getParsingFlags(config).bigHour = true;
			    });
			    addParseToken('hmm', function (input, array, config) {
			        var pos = input.length - 2;
			        array[HOUR] = toInt(input.substr(0, pos));
			        array[MINUTE] = toInt(input.substr(pos));
			        getParsingFlags(config).bigHour = true;
			    });
			    addParseToken('hmmss', function (input, array, config) {
			        var pos1 = input.length - 4,
			            pos2 = input.length - 2;
			        array[HOUR] = toInt(input.substr(0, pos1));
			        array[MINUTE] = toInt(input.substr(pos1, 2));
			        array[SECOND] = toInt(input.substr(pos2));
			        getParsingFlags(config).bigHour = true;
			    });
			    addParseToken('Hmm', function (input, array, config) {
			        var pos = input.length - 2;
			        array[HOUR] = toInt(input.substr(0, pos));
			        array[MINUTE] = toInt(input.substr(pos));
			    });
			    addParseToken('Hmmss', function (input, array, config) {
			        var pos1 = input.length - 4,
			            pos2 = input.length - 2;
			        array[HOUR] = toInt(input.substr(0, pos1));
			        array[MINUTE] = toInt(input.substr(pos1, 2));
			        array[SECOND] = toInt(input.substr(pos2));
			    });

			    // LOCALES

			    function localeIsPM(input) {
			        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
			        // Using charAt should be more compatible.
			        return (input + '').toLowerCase().charAt(0) === 'p';
			    }

			    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
			        // Setting the hour should keep the time, because the user explicitly
			        // specified which hour they want. So trying to maintain the same hour (in
			        // a new timezone) makes sense. Adding/subtracting hours does not follow
			        // this rule.
			        getSetHour = makeGetSet('Hours', true);

			    function localeMeridiem(hours, minutes, isLower) {
			        if (hours > 11) {
			            return isLower ? 'pm' : 'PM';
			        } else {
			            return isLower ? 'am' : 'AM';
			        }
			    }

			    var baseConfig = {
			        calendar: defaultCalendar,
			        longDateFormat: defaultLongDateFormat,
			        invalidDate: defaultInvalidDate,
			        ordinal: defaultOrdinal,
			        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
			        relativeTime: defaultRelativeTime,

			        months: defaultLocaleMonths,
			        monthsShort: defaultLocaleMonthsShort,

			        week: defaultLocaleWeek,

			        weekdays: defaultLocaleWeekdays,
			        weekdaysMin: defaultLocaleWeekdaysMin,
			        weekdaysShort: defaultLocaleWeekdaysShort,

			        meridiemParse: defaultLocaleMeridiemParse,
			    };

			    // internal storage for locale config files
			    var locales = {},
			        localeFamilies = {},
			        globalLocale;

			    function commonPrefix(arr1, arr2) {
			        var i,
			            minl = Math.min(arr1.length, arr2.length);
			        for (i = 0; i < minl; i += 1) {
			            if (arr1[i] !== arr2[i]) {
			                return i;
			            }
			        }
			        return minl;
			    }

			    function normalizeLocale(key) {
			        return key ? key.toLowerCase().replace('_', '-') : key;
			    }

			    // pick the locale from the array
			    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
			    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
			    function chooseLocale(names) {
			        var i = 0,
			            j,
			            next,
			            locale,
			            split;

			        while (i < names.length) {
			            split = normalizeLocale(names[i]).split('-');
			            j = split.length;
			            next = normalizeLocale(names[i + 1]);
			            next = next ? next.split('-') : null;
			            while (j > 0) {
			                locale = loadLocale(split.slice(0, j).join('-'));
			                if (locale) {
			                    return locale;
			                }
			                if (
			                    next &&
			                    next.length >= j &&
			                    commonPrefix(split, next) >= j - 1
			                ) {
			                    //the next array item is better than a shallower substring of this one
			                    break;
			                }
			                j--;
			            }
			            i++;
			        }
			        return globalLocale;
			    }

			    function loadLocale(name) {
			        var oldLocale = null,
			            aliasedRequire;
			        // TODO: Find a better way to register and load all the locales in Node
			        if (
			            locales[name] === undefined &&
			            'object' !== 'undefined' &&
			            module &&
			            module.exports
			        ) {
			            try {
			                oldLocale = globalLocale._abbr;
			                aliasedRequire = commonjsRequire;
			                aliasedRequire('./locale/' + name);
			                getSetGlobalLocale(oldLocale);
			            } catch (e) {
			                // mark as not found to avoid repeating expensive file require call causing high CPU
			                // when trying to find en-US, en_US, en-us for every format call
			                locales[name] = null; // null means not found
			            }
			        }
			        return locales[name];
			    }

			    // This function will load locale and then set the global locale.  If
			    // no arguments are passed in, it will simply return the current global
			    // locale key.
			    function getSetGlobalLocale(key, values) {
			        var data;
			        if (key) {
			            if (isUndefined(values)) {
			                data = getLocale(key);
			            } else {
			                data = defineLocale(key, values);
			            }

			            if (data) {
			                // moment.duration._locale = moment._locale = data;
			                globalLocale = data;
			            } else {
			                if (typeof console !== 'undefined' && console.warn) {
			                    //warn user if arguments are passed but the locale could not be set
			                    console.warn(
			                        'Locale ' + key + ' not found. Did you forget to load it?'
			                    );
			                }
			            }
			        }

			        return globalLocale._abbr;
			    }

			    function defineLocale(name, config) {
			        if (config !== null) {
			            var locale,
			                parentConfig = baseConfig;
			            config.abbr = name;
			            if (locales[name] != null) {
			                deprecateSimple(
			                    'defineLocaleOverride',
			                    'use moment.updateLocale(localeName, config) to change ' +
			                        'an existing locale. moment.defineLocale(localeName, ' +
			                        'config) should only be used for creating a new locale ' +
			                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
			                );
			                parentConfig = locales[name]._config;
			            } else if (config.parentLocale != null) {
			                if (locales[config.parentLocale] != null) {
			                    parentConfig = locales[config.parentLocale]._config;
			                } else {
			                    locale = loadLocale(config.parentLocale);
			                    if (locale != null) {
			                        parentConfig = locale._config;
			                    } else {
			                        if (!localeFamilies[config.parentLocale]) {
			                            localeFamilies[config.parentLocale] = [];
			                        }
			                        localeFamilies[config.parentLocale].push({
			                            name: name,
			                            config: config,
			                        });
			                        return null;
			                    }
			                }
			            }
			            locales[name] = new Locale(mergeConfigs(parentConfig, config));

			            if (localeFamilies[name]) {
			                localeFamilies[name].forEach(function (x) {
			                    defineLocale(x.name, x.config);
			                });
			            }

			            // backwards compat for now: also set the locale
			            // make sure we set the locale AFTER all child locales have been
			            // created, so we won't end up with the child locale set.
			            getSetGlobalLocale(name);

			            return locales[name];
			        } else {
			            // useful for testing
			            delete locales[name];
			            return null;
			        }
			    }

			    function updateLocale(name, config) {
			        if (config != null) {
			            var locale,
			                tmpLocale,
			                parentConfig = baseConfig;

			            if (locales[name] != null && locales[name].parentLocale != null) {
			                // Update existing child locale in-place to avoid memory-leaks
			                locales[name].set(mergeConfigs(locales[name]._config, config));
			            } else {
			                // MERGE
			                tmpLocale = loadLocale(name);
			                if (tmpLocale != null) {
			                    parentConfig = tmpLocale._config;
			                }
			                config = mergeConfigs(parentConfig, config);
			                if (tmpLocale == null) {
			                    // updateLocale is called for creating a new locale
			                    // Set abbr so it will have a name (getters return
			                    // undefined otherwise).
			                    config.abbr = name;
			                }
			                locale = new Locale(config);
			                locale.parentLocale = locales[name];
			                locales[name] = locale;
			            }

			            // backwards compat for now: also set the locale
			            getSetGlobalLocale(name);
			        } else {
			            // pass null for config to unupdate, useful for tests
			            if (locales[name] != null) {
			                if (locales[name].parentLocale != null) {
			                    locales[name] = locales[name].parentLocale;
			                    if (name === getSetGlobalLocale()) {
			                        getSetGlobalLocale(name);
			                    }
			                } else if (locales[name] != null) {
			                    delete locales[name];
			                }
			            }
			        }
			        return locales[name];
			    }

			    // returns locale data
			    function getLocale(key) {
			        var locale;

			        if (key && key._locale && key._locale._abbr) {
			            key = key._locale._abbr;
			        }

			        if (!key) {
			            return globalLocale;
			        }

			        if (!isArray(key)) {
			            //short-circuit everything else
			            locale = loadLocale(key);
			            if (locale) {
			                return locale;
			            }
			            key = [key];
			        }

			        return chooseLocale(key);
			    }

			    function listLocales() {
			        return keys(locales);
			    }

			    function checkOverflow(m) {
			        var overflow,
			            a = m._a;

			        if (a && getParsingFlags(m).overflow === -2) {
			            overflow =
			                a[MONTH] < 0 || a[MONTH] > 11
			                    ? MONTH
			                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
			                    ? DATE
			                    : a[HOUR] < 0 ||
			                      a[HOUR] > 24 ||
			                      (a[HOUR] === 24 &&
			                          (a[MINUTE] !== 0 ||
			                              a[SECOND] !== 0 ||
			                              a[MILLISECOND] !== 0))
			                    ? HOUR
			                    : a[MINUTE] < 0 || a[MINUTE] > 59
			                    ? MINUTE
			                    : a[SECOND] < 0 || a[SECOND] > 59
			                    ? SECOND
			                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
			                    ? MILLISECOND
			                    : -1;

			            if (
			                getParsingFlags(m)._overflowDayOfYear &&
			                (overflow < YEAR || overflow > DATE)
			            ) {
			                overflow = DATE;
			            }
			            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
			                overflow = WEEK;
			            }
			            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
			                overflow = WEEKDAY;
			            }

			            getParsingFlags(m).overflow = overflow;
			        }

			        return m;
			    }

			    // iso 8601 regex
			    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
			    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
			        isoDates = [
			            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
			            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
			            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
			            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
			            ['YYYY-DDD', /\d{4}-\d{3}/],
			            ['YYYY-MM', /\d{4}-\d\d/, false],
			            ['YYYYYYMMDD', /[+-]\d{10}/],
			            ['YYYYMMDD', /\d{8}/],
			            ['GGGG[W]WWE', /\d{4}W\d{3}/],
			            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
			            ['YYYYDDD', /\d{7}/],
			            ['YYYYMM', /\d{6}/, false],
			            ['YYYY', /\d{4}/, false],
			        ],
			        // iso time formats and regexes
			        isoTimes = [
			            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
			            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
			            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
			            ['HH:mm', /\d\d:\d\d/],
			            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
			            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
			            ['HHmmss', /\d\d\d\d\d\d/],
			            ['HHmm', /\d\d\d\d/],
			            ['HH', /\d\d/],
			        ],
			        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
			        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
			        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
			        obsOffsets = {
			            UT: 0,
			            GMT: 0,
			            EDT: -4 * 60,
			            EST: -5 * 60,
			            CDT: -5 * 60,
			            CST: -6 * 60,
			            MDT: -6 * 60,
			            MST: -7 * 60,
			            PDT: -7 * 60,
			            PST: -8 * 60,
			        };

			    // date from iso format
			    function configFromISO(config) {
			        var i,
			            l,
			            string = config._i,
			            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
			            allowTime,
			            dateFormat,
			            timeFormat,
			            tzFormat;

			        if (match) {
			            getParsingFlags(config).iso = true;

			            for (i = 0, l = isoDates.length; i < l; i++) {
			                if (isoDates[i][1].exec(match[1])) {
			                    dateFormat = isoDates[i][0];
			                    allowTime = isoDates[i][2] !== false;
			                    break;
			                }
			            }
			            if (dateFormat == null) {
			                config._isValid = false;
			                return;
			            }
			            if (match[3]) {
			                for (i = 0, l = isoTimes.length; i < l; i++) {
			                    if (isoTimes[i][1].exec(match[3])) {
			                        // match[2] should be 'T' or space
			                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
			                        break;
			                    }
			                }
			                if (timeFormat == null) {
			                    config._isValid = false;
			                    return;
			                }
			            }
			            if (!allowTime && timeFormat != null) {
			                config._isValid = false;
			                return;
			            }
			            if (match[4]) {
			                if (tzRegex.exec(match[4])) {
			                    tzFormat = 'Z';
			                } else {
			                    config._isValid = false;
			                    return;
			                }
			            }
			            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
			            configFromStringAndFormat(config);
			        } else {
			            config._isValid = false;
			        }
			    }

			    function extractFromRFC2822Strings(
			        yearStr,
			        monthStr,
			        dayStr,
			        hourStr,
			        minuteStr,
			        secondStr
			    ) {
			        var result = [
			            untruncateYear(yearStr),
			            defaultLocaleMonthsShort.indexOf(monthStr),
			            parseInt(dayStr, 10),
			            parseInt(hourStr, 10),
			            parseInt(minuteStr, 10),
			        ];

			        if (secondStr) {
			            result.push(parseInt(secondStr, 10));
			        }

			        return result;
			    }

			    function untruncateYear(yearStr) {
			        var year = parseInt(yearStr, 10);
			        if (year <= 49) {
			            return 2000 + year;
			        } else if (year <= 999) {
			            return 1900 + year;
			        }
			        return year;
			    }

			    function preprocessRFC2822(s) {
			        // Remove comments and folding whitespace and replace multiple-spaces with a single space
			        return s
			            .replace(/\([^)]*\)|[\n\t]/g, ' ')
			            .replace(/(\s\s+)/g, ' ')
			            .replace(/^\s\s*/, '')
			            .replace(/\s\s*$/, '');
			    }

			    function checkWeekday(weekdayStr, parsedInput, config) {
			        if (weekdayStr) {
			            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
			            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
			                weekdayActual = new Date(
			                    parsedInput[0],
			                    parsedInput[1],
			                    parsedInput[2]
			                ).getDay();
			            if (weekdayProvided !== weekdayActual) {
			                getParsingFlags(config).weekdayMismatch = true;
			                config._isValid = false;
			                return false;
			            }
			        }
			        return true;
			    }

			    function calculateOffset(obsOffset, militaryOffset, numOffset) {
			        if (obsOffset) {
			            return obsOffsets[obsOffset];
			        } else if (militaryOffset) {
			            // the only allowed military tz is Z
			            return 0;
			        } else {
			            var hm = parseInt(numOffset, 10),
			                m = hm % 100,
			                h = (hm - m) / 100;
			            return h * 60 + m;
			        }
			    }

			    // date and time from ref 2822 format
			    function configFromRFC2822(config) {
			        var match = rfc2822.exec(preprocessRFC2822(config._i)),
			            parsedArray;
			        if (match) {
			            parsedArray = extractFromRFC2822Strings(
			                match[4],
			                match[3],
			                match[2],
			                match[5],
			                match[6],
			                match[7]
			            );
			            if (!checkWeekday(match[1], parsedArray, config)) {
			                return;
			            }

			            config._a = parsedArray;
			            config._tzm = calculateOffset(match[8], match[9], match[10]);

			            config._d = createUTCDate.apply(null, config._a);
			            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

			            getParsingFlags(config).rfc2822 = true;
			        } else {
			            config._isValid = false;
			        }
			    }

			    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
			    function configFromString(config) {
			        var matched = aspNetJsonRegex.exec(config._i);
			        if (matched !== null) {
			            config._d = new Date(+matched[1]);
			            return;
			        }

			        configFromISO(config);
			        if (config._isValid === false) {
			            delete config._isValid;
			        } else {
			            return;
			        }

			        configFromRFC2822(config);
			        if (config._isValid === false) {
			            delete config._isValid;
			        } else {
			            return;
			        }

			        if (config._strict) {
			            config._isValid = false;
			        } else {
			            // Final attempt, use Input Fallback
			            hooks.createFromInputFallback(config);
			        }
			    }

			    hooks.createFromInputFallback = deprecate(
			        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
			            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
			            'discouraged and will be removed in an upcoming major release. Please refer to ' +
			            'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
			        function (config) {
			            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
			        }
			    );

			    // Pick the first defined of two or three arguments.
			    function defaults(a, b, c) {
			        if (a != null) {
			            return a;
			        }
			        if (b != null) {
			            return b;
			        }
			        return c;
			    }

			    function currentDateArray(config) {
			        // hooks is actually the exported moment object
			        var nowValue = new Date(hooks.now());
			        if (config._useUTC) {
			            return [
			                nowValue.getUTCFullYear(),
			                nowValue.getUTCMonth(),
			                nowValue.getUTCDate(),
			            ];
			        }
			        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
			    }

			    // convert an array to a date.
			    // the array should mirror the parameters below
			    // note: all values past the year are optional and will default to the lowest possible value.
			    // [year, month, day , hour, minute, second, millisecond]
			    function configFromArray(config) {
			        var i,
			            date,
			            input = [],
			            currentDate,
			            expectedWeekday,
			            yearToUse;

			        if (config._d) {
			            return;
			        }

			        currentDate = currentDateArray(config);

			        //compute day of the year from weeks and weekdays
			        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
			            dayOfYearFromWeekInfo(config);
			        }

			        //if the day of the year is set, figure out what it is
			        if (config._dayOfYear != null) {
			            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

			            if (
			                config._dayOfYear > daysInYear(yearToUse) ||
			                config._dayOfYear === 0
			            ) {
			                getParsingFlags(config)._overflowDayOfYear = true;
			            }

			            date = createUTCDate(yearToUse, 0, config._dayOfYear);
			            config._a[MONTH] = date.getUTCMonth();
			            config._a[DATE] = date.getUTCDate();
			        }

			        // Default to current date.
			        // * if no year, month, day of month are given, default to today
			        // * if day of month is given, default month and year
			        // * if month is given, default only year
			        // * if year is given, don't default anything
			        for (i = 0; i < 3 && config._a[i] == null; ++i) {
			            config._a[i] = input[i] = currentDate[i];
			        }

			        // Zero out whatever was not defaulted, including time
			        for (; i < 7; i++) {
			            config._a[i] = input[i] =
			                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
			        }

			        // Check for 24:00:00.000
			        if (
			            config._a[HOUR] === 24 &&
			            config._a[MINUTE] === 0 &&
			            config._a[SECOND] === 0 &&
			            config._a[MILLISECOND] === 0
			        ) {
			            config._nextDay = true;
			            config._a[HOUR] = 0;
			        }

			        config._d = (config._useUTC ? createUTCDate : createDate).apply(
			            null,
			            input
			        );
			        expectedWeekday = config._useUTC
			            ? config._d.getUTCDay()
			            : config._d.getDay();

			        // Apply timezone offset from input. The actual utcOffset can be changed
			        // with parseZone.
			        if (config._tzm != null) {
			            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
			        }

			        if (config._nextDay) {
			            config._a[HOUR] = 24;
			        }

			        // check for mismatching day of week
			        if (
			            config._w &&
			            typeof config._w.d !== 'undefined' &&
			            config._w.d !== expectedWeekday
			        ) {
			            getParsingFlags(config).weekdayMismatch = true;
			        }
			    }

			    function dayOfYearFromWeekInfo(config) {
			        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

			        w = config._w;
			        if (w.GG != null || w.W != null || w.E != null) {
			            dow = 1;
			            doy = 4;

			            // TODO: We need to take the current isoWeekYear, but that depends on
			            // how we interpret now (local, utc, fixed offset). So create
			            // a now version of current config (take local/utc/offset flags, and
			            // create now).
			            weekYear = defaults(
			                w.GG,
			                config._a[YEAR],
			                weekOfYear(createLocal(), 1, 4).year
			            );
			            week = defaults(w.W, 1);
			            weekday = defaults(w.E, 1);
			            if (weekday < 1 || weekday > 7) {
			                weekdayOverflow = true;
			            }
			        } else {
			            dow = config._locale._week.dow;
			            doy = config._locale._week.doy;

			            curWeek = weekOfYear(createLocal(), dow, doy);

			            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

			            // Default to current week.
			            week = defaults(w.w, curWeek.week);

			            if (w.d != null) {
			                // weekday -- low day numbers are considered next week
			                weekday = w.d;
			                if (weekday < 0 || weekday > 6) {
			                    weekdayOverflow = true;
			                }
			            } else if (w.e != null) {
			                // local weekday -- counting starts from beginning of week
			                weekday = w.e + dow;
			                if (w.e < 0 || w.e > 6) {
			                    weekdayOverflow = true;
			                }
			            } else {
			                // default to beginning of week
			                weekday = dow;
			            }
			        }
			        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
			            getParsingFlags(config)._overflowWeeks = true;
			        } else if (weekdayOverflow != null) {
			            getParsingFlags(config)._overflowWeekday = true;
			        } else {
			            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
			            config._a[YEAR] = temp.year;
			            config._dayOfYear = temp.dayOfYear;
			        }
			    }

			    // constant that refers to the ISO standard
			    hooks.ISO_8601 = function () {};

			    // constant that refers to the RFC 2822 form
			    hooks.RFC_2822 = function () {};

			    // date from string and format string
			    function configFromStringAndFormat(config) {
			        // TODO: Move this to another part of the creation flow to prevent circular deps
			        if (config._f === hooks.ISO_8601) {
			            configFromISO(config);
			            return;
			        }
			        if (config._f === hooks.RFC_2822) {
			            configFromRFC2822(config);
			            return;
			        }
			        config._a = [];
			        getParsingFlags(config).empty = true;

			        // This array is used to make a Date, either with `new Date` or `Date.UTC`
			        var string = '' + config._i,
			            i,
			            parsedInput,
			            tokens,
			            token,
			            skipped,
			            stringLength = string.length,
			            totalParsedInputLength = 0,
			            era;

			        tokens =
			            expandFormat(config._f, config._locale).match(formattingTokens) || [];

			        for (i = 0; i < tokens.length; i++) {
			            token = tokens[i];
			            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
			                [])[0];
			            if (parsedInput) {
			                skipped = string.substr(0, string.indexOf(parsedInput));
			                if (skipped.length > 0) {
			                    getParsingFlags(config).unusedInput.push(skipped);
			                }
			                string = string.slice(
			                    string.indexOf(parsedInput) + parsedInput.length
			                );
			                totalParsedInputLength += parsedInput.length;
			            }
			            // don't parse if it's not a known token
			            if (formatTokenFunctions[token]) {
			                if (parsedInput) {
			                    getParsingFlags(config).empty = false;
			                } else {
			                    getParsingFlags(config).unusedTokens.push(token);
			                }
			                addTimeToArrayFromToken(token, parsedInput, config);
			            } else if (config._strict && !parsedInput) {
			                getParsingFlags(config).unusedTokens.push(token);
			            }
			        }

			        // add remaining unparsed input length to the string
			        getParsingFlags(config).charsLeftOver =
			            stringLength - totalParsedInputLength;
			        if (string.length > 0) {
			            getParsingFlags(config).unusedInput.push(string);
			        }

			        // clear _12h flag if hour is <= 12
			        if (
			            config._a[HOUR] <= 12 &&
			            getParsingFlags(config).bigHour === true &&
			            config._a[HOUR] > 0
			        ) {
			            getParsingFlags(config).bigHour = undefined;
			        }

			        getParsingFlags(config).parsedDateParts = config._a.slice(0);
			        getParsingFlags(config).meridiem = config._meridiem;
			        // handle meridiem
			        config._a[HOUR] = meridiemFixWrap(
			            config._locale,
			            config._a[HOUR],
			            config._meridiem
			        );

			        // handle era
			        era = getParsingFlags(config).era;
			        if (era !== null) {
			            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
			        }

			        configFromArray(config);
			        checkOverflow(config);
			    }

			    function meridiemFixWrap(locale, hour, meridiem) {
			        var isPm;

			        if (meridiem == null) {
			            // nothing to do
			            return hour;
			        }
			        if (locale.meridiemHour != null) {
			            return locale.meridiemHour(hour, meridiem);
			        } else if (locale.isPM != null) {
			            // Fallback
			            isPm = locale.isPM(meridiem);
			            if (isPm && hour < 12) {
			                hour += 12;
			            }
			            if (!isPm && hour === 12) {
			                hour = 0;
			            }
			            return hour;
			        } else {
			            // this is not supposed to happen
			            return hour;
			        }
			    }

			    // date from string and array of format strings
			    function configFromStringAndArray(config) {
			        var tempConfig,
			            bestMoment,
			            scoreToBeat,
			            i,
			            currentScore,
			            validFormatFound,
			            bestFormatIsValid = false;

			        if (config._f.length === 0) {
			            getParsingFlags(config).invalidFormat = true;
			            config._d = new Date(NaN);
			            return;
			        }

			        for (i = 0; i < config._f.length; i++) {
			            currentScore = 0;
			            validFormatFound = false;
			            tempConfig = copyConfig({}, config);
			            if (config._useUTC != null) {
			                tempConfig._useUTC = config._useUTC;
			            }
			            tempConfig._f = config._f[i];
			            configFromStringAndFormat(tempConfig);

			            if (isValid(tempConfig)) {
			                validFormatFound = true;
			            }

			            // if there is any input that was not parsed add a penalty for that format
			            currentScore += getParsingFlags(tempConfig).charsLeftOver;

			            //or tokens
			            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

			            getParsingFlags(tempConfig).score = currentScore;

			            if (!bestFormatIsValid) {
			                if (
			                    scoreToBeat == null ||
			                    currentScore < scoreToBeat ||
			                    validFormatFound
			                ) {
			                    scoreToBeat = currentScore;
			                    bestMoment = tempConfig;
			                    if (validFormatFound) {
			                        bestFormatIsValid = true;
			                    }
			                }
			            } else {
			                if (currentScore < scoreToBeat) {
			                    scoreToBeat = currentScore;
			                    bestMoment = tempConfig;
			                }
			            }
			        }

			        extend(config, bestMoment || tempConfig);
			    }

			    function configFromObject(config) {
			        if (config._d) {
			            return;
			        }

			        var i = normalizeObjectUnits(config._i),
			            dayOrDate = i.day === undefined ? i.date : i.day;
			        config._a = map(
			            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
			            function (obj) {
			                return obj && parseInt(obj, 10);
			            }
			        );

			        configFromArray(config);
			    }

			    function createFromConfig(config) {
			        var res = new Moment(checkOverflow(prepareConfig(config)));
			        if (res._nextDay) {
			            // Adding is smart enough around DST
			            res.add(1, 'd');
			            res._nextDay = undefined;
			        }

			        return res;
			    }

			    function prepareConfig(config) {
			        var input = config._i,
			            format = config._f;

			        config._locale = config._locale || getLocale(config._l);

			        if (input === null || (format === undefined && input === '')) {
			            return createInvalid({ nullInput: true });
			        }

			        if (typeof input === 'string') {
			            config._i = input = config._locale.preparse(input);
			        }

			        if (isMoment(input)) {
			            return new Moment(checkOverflow(input));
			        } else if (isDate(input)) {
			            config._d = input;
			        } else if (isArray(format)) {
			            configFromStringAndArray(config);
			        } else if (format) {
			            configFromStringAndFormat(config);
			        } else {
			            configFromInput(config);
			        }

			        if (!isValid(config)) {
			            config._d = null;
			        }

			        return config;
			    }

			    function configFromInput(config) {
			        var input = config._i;
			        if (isUndefined(input)) {
			            config._d = new Date(hooks.now());
			        } else if (isDate(input)) {
			            config._d = new Date(input.valueOf());
			        } else if (typeof input === 'string') {
			            configFromString(config);
			        } else if (isArray(input)) {
			            config._a = map(input.slice(0), function (obj) {
			                return parseInt(obj, 10);
			            });
			            configFromArray(config);
			        } else if (isObject(input)) {
			            configFromObject(config);
			        } else if (isNumber(input)) {
			            // from milliseconds
			            config._d = new Date(input);
			        } else {
			            hooks.createFromInputFallback(config);
			        }
			    }

			    function createLocalOrUTC(input, format, locale, strict, isUTC) {
			        var c = {};

			        if (format === true || format === false) {
			            strict = format;
			            format = undefined;
			        }

			        if (locale === true || locale === false) {
			            strict = locale;
			            locale = undefined;
			        }

			        if (
			            (isObject(input) && isObjectEmpty(input)) ||
			            (isArray(input) && input.length === 0)
			        ) {
			            input = undefined;
			        }
			        // object construction must be done this way.
			        // https://github.com/moment/moment/issues/1423
			        c._isAMomentObject = true;
			        c._useUTC = c._isUTC = isUTC;
			        c._l = locale;
			        c._i = input;
			        c._f = format;
			        c._strict = strict;

			        return createFromConfig(c);
			    }

			    function createLocal(input, format, locale, strict) {
			        return createLocalOrUTC(input, format, locale, strict, false);
			    }

			    var prototypeMin = deprecate(
			            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
			            function () {
			                var other = createLocal.apply(null, arguments);
			                if (this.isValid() && other.isValid()) {
			                    return other < this ? this : other;
			                } else {
			                    return createInvalid();
			                }
			            }
			        ),
			        prototypeMax = deprecate(
			            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
			            function () {
			                var other = createLocal.apply(null, arguments);
			                if (this.isValid() && other.isValid()) {
			                    return other > this ? this : other;
			                } else {
			                    return createInvalid();
			                }
			            }
			        );

			    // Pick a moment m from moments so that m[fn](other) is true for all
			    // other. This relies on the function fn to be transitive.
			    //
			    // moments should either be an array of moment objects or an array, whose
			    // first element is an array of moment objects.
			    function pickBy(fn, moments) {
			        var res, i;
			        if (moments.length === 1 && isArray(moments[0])) {
			            moments = moments[0];
			        }
			        if (!moments.length) {
			            return createLocal();
			        }
			        res = moments[0];
			        for (i = 1; i < moments.length; ++i) {
			            if (!moments[i].isValid() || moments[i][fn](res)) {
			                res = moments[i];
			            }
			        }
			        return res;
			    }

			    // TODO: Use [].sort instead?
			    function min() {
			        var args = [].slice.call(arguments, 0);

			        return pickBy('isBefore', args);
			    }

			    function max() {
			        var args = [].slice.call(arguments, 0);

			        return pickBy('isAfter', args);
			    }

			    var now = function () {
			        return Date.now ? Date.now() : +new Date();
			    };

			    var ordering = [
			        'year',
			        'quarter',
			        'month',
			        'week',
			        'day',
			        'hour',
			        'minute',
			        'second',
			        'millisecond',
			    ];

			    function isDurationValid(m) {
			        var key,
			            unitHasDecimal = false,
			            i;
			        for (key in m) {
			            if (
			                hasOwnProp(m, key) &&
			                !(
			                    indexOf.call(ordering, key) !== -1 &&
			                    (m[key] == null || !isNaN(m[key]))
			                )
			            ) {
			                return false;
			            }
			        }

			        for (i = 0; i < ordering.length; ++i) {
			            if (m[ordering[i]]) {
			                if (unitHasDecimal) {
			                    return false; // only allow non-integers for smallest unit
			                }
			                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
			                    unitHasDecimal = true;
			                }
			            }
			        }

			        return true;
			    }

			    function isValid$1() {
			        return this._isValid;
			    }

			    function createInvalid$1() {
			        return createDuration(NaN);
			    }

			    function Duration(duration) {
			        var normalizedInput = normalizeObjectUnits(duration),
			            years = normalizedInput.year || 0,
			            quarters = normalizedInput.quarter || 0,
			            months = normalizedInput.month || 0,
			            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
			            days = normalizedInput.day || 0,
			            hours = normalizedInput.hour || 0,
			            minutes = normalizedInput.minute || 0,
			            seconds = normalizedInput.second || 0,
			            milliseconds = normalizedInput.millisecond || 0;

			        this._isValid = isDurationValid(normalizedInput);

			        // representation for dateAddRemove
			        this._milliseconds =
			            +milliseconds +
			            seconds * 1e3 + // 1000
			            minutes * 6e4 + // 1000 * 60
			            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
			        // Because of dateAddRemove treats 24 hours as different from a
			        // day when working around DST, we need to store them separately
			        this._days = +days + weeks * 7;
			        // It is impossible to translate months into days without knowing
			        // which months you are are talking about, so we have to store
			        // it separately.
			        this._months = +months + quarters * 3 + years * 12;

			        this._data = {};

			        this._locale = getLocale();

			        this._bubble();
			    }

			    function isDuration(obj) {
			        return obj instanceof Duration;
			    }

			    function absRound(number) {
			        if (number < 0) {
			            return Math.round(-1 * number) * -1;
			        } else {
			            return Math.round(number);
			        }
			    }

			    // compare two arrays, return the number of differences
			    function compareArrays(array1, array2, dontConvert) {
			        var len = Math.min(array1.length, array2.length),
			            lengthDiff = Math.abs(array1.length - array2.length),
			            diffs = 0,
			            i;
			        for (i = 0; i < len; i++) {
			            if (
			                (dontConvert && array1[i] !== array2[i]) ||
			                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
			            ) {
			                diffs++;
			            }
			        }
			        return diffs + lengthDiff;
			    }

			    // FORMATTING

			    function offset(token, separator) {
			        addFormatToken(token, 0, 0, function () {
			            var offset = this.utcOffset(),
			                sign = '+';
			            if (offset < 0) {
			                offset = -offset;
			                sign = '-';
			            }
			            return (
			                sign +
			                zeroFill(~~(offset / 60), 2) +
			                separator +
			                zeroFill(~~offset % 60, 2)
			            );
			        });
			    }

			    offset('Z', ':');
			    offset('ZZ', '');

			    // PARSING

			    addRegexToken('Z', matchShortOffset);
			    addRegexToken('ZZ', matchShortOffset);
			    addParseToken(['Z', 'ZZ'], function (input, array, config) {
			        config._useUTC = true;
			        config._tzm = offsetFromString(matchShortOffset, input);
			    });

			    // HELPERS

			    // timezone chunker
			    // '+10:00' > ['10',  '00']
			    // '-1530'  > ['-15', '30']
			    var chunkOffset = /([\+\-]|\d\d)/gi;

			    function offsetFromString(matcher, string) {
			        var matches = (string || '').match(matcher),
			            chunk,
			            parts,
			            minutes;

			        if (matches === null) {
			            return null;
			        }

			        chunk = matches[matches.length - 1] || [];
			        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
			        minutes = +(parts[1] * 60) + toInt(parts[2]);

			        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
			    }

			    // Return a moment from input, that is local/utc/zone equivalent to model.
			    function cloneWithOffset(input, model) {
			        var res, diff;
			        if (model._isUTC) {
			            res = model.clone();
			            diff =
			                (isMoment(input) || isDate(input)
			                    ? input.valueOf()
			                    : createLocal(input).valueOf()) - res.valueOf();
			            // Use low-level api, because this fn is low-level api.
			            res._d.setTime(res._d.valueOf() + diff);
			            hooks.updateOffset(res, false);
			            return res;
			        } else {
			            return createLocal(input).local();
			        }
			    }

			    function getDateOffset(m) {
			        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
			        // https://github.com/moment/moment/pull/1871
			        return -Math.round(m._d.getTimezoneOffset());
			    }

			    // HOOKS

			    // This function will be called whenever a moment is mutated.
			    // It is intended to keep the offset in sync with the timezone.
			    hooks.updateOffset = function () {};

			    // MOMENTS

			    // keepLocalTime = true means only change the timezone, without
			    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
			    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
			    // +0200, so we adjust the time as needed, to be valid.
			    //
			    // Keeping the time actually adds/subtracts (one hour)
			    // from the actual represented time. That is why we call updateOffset
			    // a second time. In case it wants us to change the offset again
			    // _changeInProgress == true case, then we have to adjust, because
			    // there is no such time in the given timezone.
			    function getSetOffset(input, keepLocalTime, keepMinutes) {
			        var offset = this._offset || 0,
			            localAdjust;
			        if (!this.isValid()) {
			            return input != null ? this : NaN;
			        }
			        if (input != null) {
			            if (typeof input === 'string') {
			                input = offsetFromString(matchShortOffset, input);
			                if (input === null) {
			                    return this;
			                }
			            } else if (Math.abs(input) < 16 && !keepMinutes) {
			                input = input * 60;
			            }
			            if (!this._isUTC && keepLocalTime) {
			                localAdjust = getDateOffset(this);
			            }
			            this._offset = input;
			            this._isUTC = true;
			            if (localAdjust != null) {
			                this.add(localAdjust, 'm');
			            }
			            if (offset !== input) {
			                if (!keepLocalTime || this._changeInProgress) {
			                    addSubtract(
			                        this,
			                        createDuration(input - offset, 'm'),
			                        1,
			                        false
			                    );
			                } else if (!this._changeInProgress) {
			                    this._changeInProgress = true;
			                    hooks.updateOffset(this, true);
			                    this._changeInProgress = null;
			                }
			            }
			            return this;
			        } else {
			            return this._isUTC ? offset : getDateOffset(this);
			        }
			    }

			    function getSetZone(input, keepLocalTime) {
			        if (input != null) {
			            if (typeof input !== 'string') {
			                input = -input;
			            }

			            this.utcOffset(input, keepLocalTime);

			            return this;
			        } else {
			            return -this.utcOffset();
			        }
			    }

			    function setOffsetToUTC(keepLocalTime) {
			        return this.utcOffset(0, keepLocalTime);
			    }

			    function setOffsetToLocal(keepLocalTime) {
			        if (this._isUTC) {
			            this.utcOffset(0, keepLocalTime);
			            this._isUTC = false;

			            if (keepLocalTime) {
			                this.subtract(getDateOffset(this), 'm');
			            }
			        }
			        return this;
			    }

			    function setOffsetToParsedOffset() {
			        if (this._tzm != null) {
			            this.utcOffset(this._tzm, false, true);
			        } else if (typeof this._i === 'string') {
			            var tZone = offsetFromString(matchOffset, this._i);
			            if (tZone != null) {
			                this.utcOffset(tZone);
			            } else {
			                this.utcOffset(0, true);
			            }
			        }
			        return this;
			    }

			    function hasAlignedHourOffset(input) {
			        if (!this.isValid()) {
			            return false;
			        }
			        input = input ? createLocal(input).utcOffset() : 0;

			        return (this.utcOffset() - input) % 60 === 0;
			    }

			    function isDaylightSavingTime() {
			        return (
			            this.utcOffset() > this.clone().month(0).utcOffset() ||
			            this.utcOffset() > this.clone().month(5).utcOffset()
			        );
			    }

			    function isDaylightSavingTimeShifted() {
			        if (!isUndefined(this._isDSTShifted)) {
			            return this._isDSTShifted;
			        }

			        var c = {},
			            other;

			        copyConfig(c, this);
			        c = prepareConfig(c);

			        if (c._a) {
			            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
			            this._isDSTShifted =
			                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
			        } else {
			            this._isDSTShifted = false;
			        }

			        return this._isDSTShifted;
			    }

			    function isLocal() {
			        return this.isValid() ? !this._isUTC : false;
			    }

			    function isUtcOffset() {
			        return this.isValid() ? this._isUTC : false;
			    }

			    function isUtc() {
			        return this.isValid() ? this._isUTC && this._offset === 0 : false;
			    }

			    // ASP.NET json date format regex
			    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
			        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
			        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
			        // and further modified to allow for strings containing both week and day
			        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

			    function createDuration(input, key) {
			        var duration = input,
			            // matching against regexp is expensive, do it on demand
			            match = null,
			            sign,
			            ret,
			            diffRes;

			        if (isDuration(input)) {
			            duration = {
			                ms: input._milliseconds,
			                d: input._days,
			                M: input._months,
			            };
			        } else if (isNumber(input) || !isNaN(+input)) {
			            duration = {};
			            if (key) {
			                duration[key] = +input;
			            } else {
			                duration.milliseconds = +input;
			            }
			        } else if ((match = aspNetRegex.exec(input))) {
			            sign = match[1] === '-' ? -1 : 1;
			            duration = {
			                y: 0,
			                d: toInt(match[DATE]) * sign,
			                h: toInt(match[HOUR]) * sign,
			                m: toInt(match[MINUTE]) * sign,
			                s: toInt(match[SECOND]) * sign,
			                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
			            };
			        } else if ((match = isoRegex.exec(input))) {
			            sign = match[1] === '-' ? -1 : 1;
			            duration = {
			                y: parseIso(match[2], sign),
			                M: parseIso(match[3], sign),
			                w: parseIso(match[4], sign),
			                d: parseIso(match[5], sign),
			                h: parseIso(match[6], sign),
			                m: parseIso(match[7], sign),
			                s: parseIso(match[8], sign),
			            };
			        } else if (duration == null) {
			            // checks for null or undefined
			            duration = {};
			        } else if (
			            typeof duration === 'object' &&
			            ('from' in duration || 'to' in duration)
			        ) {
			            diffRes = momentsDifference(
			                createLocal(duration.from),
			                createLocal(duration.to)
			            );

			            duration = {};
			            duration.ms = diffRes.milliseconds;
			            duration.M = diffRes.months;
			        }

			        ret = new Duration(duration);

			        if (isDuration(input) && hasOwnProp(input, '_locale')) {
			            ret._locale = input._locale;
			        }

			        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
			            ret._isValid = input._isValid;
			        }

			        return ret;
			    }

			    createDuration.fn = Duration.prototype;
			    createDuration.invalid = createInvalid$1;

			    function parseIso(inp, sign) {
			        // We'd normally use ~~inp for this, but unfortunately it also
			        // converts floats to ints.
			        // inp may be undefined, so careful calling replace on it.
			        var res = inp && parseFloat(inp.replace(',', '.'));
			        // apply sign while we're at it
			        return (isNaN(res) ? 0 : res) * sign;
			    }

			    function positiveMomentsDifference(base, other) {
			        var res = {};

			        res.months =
			            other.month() - base.month() + (other.year() - base.year()) * 12;
			        if (base.clone().add(res.months, 'M').isAfter(other)) {
			            --res.months;
			        }

			        res.milliseconds = +other - +base.clone().add(res.months, 'M');

			        return res;
			    }

			    function momentsDifference(base, other) {
			        var res;
			        if (!(base.isValid() && other.isValid())) {
			            return { milliseconds: 0, months: 0 };
			        }

			        other = cloneWithOffset(other, base);
			        if (base.isBefore(other)) {
			            res = positiveMomentsDifference(base, other);
			        } else {
			            res = positiveMomentsDifference(other, base);
			            res.milliseconds = -res.milliseconds;
			            res.months = -res.months;
			        }

			        return res;
			    }

			    // TODO: remove 'name' arg after deprecation is removed
			    function createAdder(direction, name) {
			        return function (val, period) {
			            var dur, tmp;
			            //invert the arguments, but complain about it
			            if (period !== null && !isNaN(+period)) {
			                deprecateSimple(
			                    name,
			                    'moment().' +
			                        name +
			                        '(period, number) is deprecated. Please use moment().' +
			                        name +
			                        '(number, period). ' +
			                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
			                );
			                tmp = val;
			                val = period;
			                period = tmp;
			            }

			            dur = createDuration(val, period);
			            addSubtract(this, dur, direction);
			            return this;
			        };
			    }

			    function addSubtract(mom, duration, isAdding, updateOffset) {
			        var milliseconds = duration._milliseconds,
			            days = absRound(duration._days),
			            months = absRound(duration._months);

			        if (!mom.isValid()) {
			            // No op
			            return;
			        }

			        updateOffset = updateOffset == null ? true : updateOffset;

			        if (months) {
			            setMonth(mom, get(mom, 'Month') + months * isAdding);
			        }
			        if (days) {
			            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
			        }
			        if (milliseconds) {
			            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
			        }
			        if (updateOffset) {
			            hooks.updateOffset(mom, days || months);
			        }
			    }

			    var add = createAdder(1, 'add'),
			        subtract = createAdder(-1, 'subtract');

			    function isString(input) {
			        return typeof input === 'string' || input instanceof String;
			    }

			    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
			    function isMomentInput(input) {
			        return (
			            isMoment(input) ||
			            isDate(input) ||
			            isString(input) ||
			            isNumber(input) ||
			            isNumberOrStringArray(input) ||
			            isMomentInputObject(input) ||
			            input === null ||
			            input === undefined
			        );
			    }

			    function isMomentInputObject(input) {
			        var objectTest = isObject(input) && !isObjectEmpty(input),
			            propertyTest = false,
			            properties = [
			                'years',
			                'year',
			                'y',
			                'months',
			                'month',
			                'M',
			                'days',
			                'day',
			                'd',
			                'dates',
			                'date',
			                'D',
			                'hours',
			                'hour',
			                'h',
			                'minutes',
			                'minute',
			                'm',
			                'seconds',
			                'second',
			                's',
			                'milliseconds',
			                'millisecond',
			                'ms',
			            ],
			            i,
			            property;

			        for (i = 0; i < properties.length; i += 1) {
			            property = properties[i];
			            propertyTest = propertyTest || hasOwnProp(input, property);
			        }

			        return objectTest && propertyTest;
			    }

			    function isNumberOrStringArray(input) {
			        var arrayTest = isArray(input),
			            dataTypeTest = false;
			        if (arrayTest) {
			            dataTypeTest =
			                input.filter(function (item) {
			                    return !isNumber(item) && isString(input);
			                }).length === 0;
			        }
			        return arrayTest && dataTypeTest;
			    }

			    function isCalendarSpec(input) {
			        var objectTest = isObject(input) && !isObjectEmpty(input),
			            propertyTest = false,
			            properties = [
			                'sameDay',
			                'nextDay',
			                'lastDay',
			                'nextWeek',
			                'lastWeek',
			                'sameElse',
			            ],
			            i,
			            property;

			        for (i = 0; i < properties.length; i += 1) {
			            property = properties[i];
			            propertyTest = propertyTest || hasOwnProp(input, property);
			        }

			        return objectTest && propertyTest;
			    }

			    function getCalendarFormat(myMoment, now) {
			        var diff = myMoment.diff(now, 'days', true);
			        return diff < -6
			            ? 'sameElse'
			            : diff < -1
			            ? 'lastWeek'
			            : diff < 0
			            ? 'lastDay'
			            : diff < 1
			            ? 'sameDay'
			            : diff < 2
			            ? 'nextDay'
			            : diff < 7
			            ? 'nextWeek'
			            : 'sameElse';
			    }

			    function calendar$1(time, formats) {
			        // Support for single parameter, formats only overload to the calendar function
			        if (arguments.length === 1) {
			            if (isMomentInput(arguments[0])) {
			                time = arguments[0];
			                formats = undefined;
			            } else if (isCalendarSpec(arguments[0])) {
			                formats = arguments[0];
			                time = undefined;
			            }
			        }
			        // We want to compare the start of today, vs this.
			        // Getting start-of-today depends on whether we're local/utc/offset or not.
			        var now = time || createLocal(),
			            sod = cloneWithOffset(now, this).startOf('day'),
			            format = hooks.calendarFormat(this, sod) || 'sameElse',
			            output =
			                formats &&
			                (isFunction(formats[format])
			                    ? formats[format].call(this, now)
			                    : formats[format]);

			        return this.format(
			            output || this.localeData().calendar(format, this, createLocal(now))
			        );
			    }

			    function clone() {
			        return new Moment(this);
			    }

			    function isAfter(input, units) {
			        var localInput = isMoment(input) ? input : createLocal(input);
			        if (!(this.isValid() && localInput.isValid())) {
			            return false;
			        }
			        units = normalizeUnits(units) || 'millisecond';
			        if (units === 'millisecond') {
			            return this.valueOf() > localInput.valueOf();
			        } else {
			            return localInput.valueOf() < this.clone().startOf(units).valueOf();
			        }
			    }

			    function isBefore(input, units) {
			        var localInput = isMoment(input) ? input : createLocal(input);
			        if (!(this.isValid() && localInput.isValid())) {
			            return false;
			        }
			        units = normalizeUnits(units) || 'millisecond';
			        if (units === 'millisecond') {
			            return this.valueOf() < localInput.valueOf();
			        } else {
			            return this.clone().endOf(units).valueOf() < localInput.valueOf();
			        }
			    }

			    function isBetween(from, to, units, inclusivity) {
			        var localFrom = isMoment(from) ? from : createLocal(from),
			            localTo = isMoment(to) ? to : createLocal(to);
			        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
			            return false;
			        }
			        inclusivity = inclusivity || '()';
			        return (
			            (inclusivity[0] === '('
			                ? this.isAfter(localFrom, units)
			                : !this.isBefore(localFrom, units)) &&
			            (inclusivity[1] === ')'
			                ? this.isBefore(localTo, units)
			                : !this.isAfter(localTo, units))
			        );
			    }

			    function isSame(input, units) {
			        var localInput = isMoment(input) ? input : createLocal(input),
			            inputMs;
			        if (!(this.isValid() && localInput.isValid())) {
			            return false;
			        }
			        units = normalizeUnits(units) || 'millisecond';
			        if (units === 'millisecond') {
			            return this.valueOf() === localInput.valueOf();
			        } else {
			            inputMs = localInput.valueOf();
			            return (
			                this.clone().startOf(units).valueOf() <= inputMs &&
			                inputMs <= this.clone().endOf(units).valueOf()
			            );
			        }
			    }

			    function isSameOrAfter(input, units) {
			        return this.isSame(input, units) || this.isAfter(input, units);
			    }

			    function isSameOrBefore(input, units) {
			        return this.isSame(input, units) || this.isBefore(input, units);
			    }

			    function diff(input, units, asFloat) {
			        var that, zoneDelta, output;

			        if (!this.isValid()) {
			            return NaN;
			        }

			        that = cloneWithOffset(input, this);

			        if (!that.isValid()) {
			            return NaN;
			        }

			        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

			        units = normalizeUnits(units);

			        switch (units) {
			            case 'year':
			                output = monthDiff(this, that) / 12;
			                break;
			            case 'month':
			                output = monthDiff(this, that);
			                break;
			            case 'quarter':
			                output = monthDiff(this, that) / 3;
			                break;
			            case 'second':
			                output = (this - that) / 1e3;
			                break; // 1000
			            case 'minute':
			                output = (this - that) / 6e4;
			                break; // 1000 * 60
			            case 'hour':
			                output = (this - that) / 36e5;
			                break; // 1000 * 60 * 60
			            case 'day':
			                output = (this - that - zoneDelta) / 864e5;
			                break; // 1000 * 60 * 60 * 24, negate dst
			            case 'week':
			                output = (this - that - zoneDelta) / 6048e5;
			                break; // 1000 * 60 * 60 * 24 * 7, negate dst
			            default:
			                output = this - that;
			        }

			        return asFloat ? output : absFloor(output);
			    }

			    function monthDiff(a, b) {
			        if (a.date() < b.date()) {
			            // end-of-month calculations work correct when the start month has more
			            // days than the end month.
			            return -monthDiff(b, a);
			        }
			        // difference in months
			        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
			            // b is in (anchor - 1 month, anchor + 1 month)
			            anchor = a.clone().add(wholeMonthDiff, 'months'),
			            anchor2,
			            adjust;

			        if (b - anchor < 0) {
			            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
			            // linear across the month
			            adjust = (b - anchor) / (anchor - anchor2);
			        } else {
			            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
			            // linear across the month
			            adjust = (b - anchor) / (anchor2 - anchor);
			        }

			        //check for negative zero, return zero if negative zero
			        return -(wholeMonthDiff + adjust) || 0;
			    }

			    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
			    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

			    function toString() {
			        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
			    }

			    function toISOString(keepOffset) {
			        if (!this.isValid()) {
			            return null;
			        }
			        var utc = keepOffset !== true,
			            m = utc ? this.clone().utc() : this;
			        if (m.year() < 0 || m.year() > 9999) {
			            return formatMoment(
			                m,
			                utc
			                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
			                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
			            );
			        }
			        if (isFunction(Date.prototype.toISOString)) {
			            // native implementation is ~50x faster, use it when we can
			            if (utc) {
			                return this.toDate().toISOString();
			            } else {
			                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
			                    .toISOString()
			                    .replace('Z', formatMoment(m, 'Z'));
			            }
			        }
			        return formatMoment(
			            m,
			            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
			        );
			    }

			    /**
			     * Return a human readable representation of a moment that can
			     * also be evaluated to get a new moment which is the same
			     *
			     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
			     */
			    function inspect() {
			        if (!this.isValid()) {
			            return 'moment.invalid(/* ' + this._i + ' */)';
			        }
			        var func = 'moment',
			            zone = '',
			            prefix,
			            year,
			            datetime,
			            suffix;
			        if (!this.isLocal()) {
			            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
			            zone = 'Z';
			        }
			        prefix = '[' + func + '("]';
			        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
			        datetime = '-MM-DD[T]HH:mm:ss.SSS';
			        suffix = zone + '[")]';

			        return this.format(prefix + year + datetime + suffix);
			    }

			    function format(inputString) {
			        if (!inputString) {
			            inputString = this.isUtc()
			                ? hooks.defaultFormatUtc
			                : hooks.defaultFormat;
			        }
			        var output = formatMoment(this, inputString);
			        return this.localeData().postformat(output);
			    }

			    function from(time, withoutSuffix) {
			        if (
			            this.isValid() &&
			            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
			        ) {
			            return createDuration({ to: this, from: time })
			                .locale(this.locale())
			                .humanize(!withoutSuffix);
			        } else {
			            return this.localeData().invalidDate();
			        }
			    }

			    function fromNow(withoutSuffix) {
			        return this.from(createLocal(), withoutSuffix);
			    }

			    function to(time, withoutSuffix) {
			        if (
			            this.isValid() &&
			            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
			        ) {
			            return createDuration({ from: this, to: time })
			                .locale(this.locale())
			                .humanize(!withoutSuffix);
			        } else {
			            return this.localeData().invalidDate();
			        }
			    }

			    function toNow(withoutSuffix) {
			        return this.to(createLocal(), withoutSuffix);
			    }

			    // If passed a locale key, it will set the locale for this
			    // instance.  Otherwise, it will return the locale configuration
			    // variables for this instance.
			    function locale(key) {
			        var newLocaleData;

			        if (key === undefined) {
			            return this._locale._abbr;
			        } else {
			            newLocaleData = getLocale(key);
			            if (newLocaleData != null) {
			                this._locale = newLocaleData;
			            }
			            return this;
			        }
			    }

			    var lang = deprecate(
			        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
			        function (key) {
			            if (key === undefined) {
			                return this.localeData();
			            } else {
			                return this.locale(key);
			            }
			        }
			    );

			    function localeData() {
			        return this._locale;
			    }

			    var MS_PER_SECOND = 1000,
			        MS_PER_MINUTE = 60 * MS_PER_SECOND,
			        MS_PER_HOUR = 60 * MS_PER_MINUTE,
			        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

			    // actual modulo - handles negative numbers (for dates before 1970):
			    function mod$1(dividend, divisor) {
			        return ((dividend % divisor) + divisor) % divisor;
			    }

			    function localStartOfDate(y, m, d) {
			        // the date constructor remaps years 0-99 to 1900-1999
			        if (y < 100 && y >= 0) {
			            // preserve leap years using a full 400 year cycle, then reset
			            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
			        } else {
			            return new Date(y, m, d).valueOf();
			        }
			    }

			    function utcStartOfDate(y, m, d) {
			        // Date.UTC remaps years 0-99 to 1900-1999
			        if (y < 100 && y >= 0) {
			            // preserve leap years using a full 400 year cycle, then reset
			            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
			        } else {
			            return Date.UTC(y, m, d);
			        }
			    }

			    function startOf(units) {
			        var time, startOfDate;
			        units = normalizeUnits(units);
			        if (units === undefined || units === 'millisecond' || !this.isValid()) {
			            return this;
			        }

			        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

			        switch (units) {
			            case 'year':
			                time = startOfDate(this.year(), 0, 1);
			                break;
			            case 'quarter':
			                time = startOfDate(
			                    this.year(),
			                    this.month() - (this.month() % 3),
			                    1
			                );
			                break;
			            case 'month':
			                time = startOfDate(this.year(), this.month(), 1);
			                break;
			            case 'week':
			                time = startOfDate(
			                    this.year(),
			                    this.month(),
			                    this.date() - this.weekday()
			                );
			                break;
			            case 'isoWeek':
			                time = startOfDate(
			                    this.year(),
			                    this.month(),
			                    this.date() - (this.isoWeekday() - 1)
			                );
			                break;
			            case 'day':
			            case 'date':
			                time = startOfDate(this.year(), this.month(), this.date());
			                break;
			            case 'hour':
			                time = this._d.valueOf();
			                time -= mod$1(
			                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
			                    MS_PER_HOUR
			                );
			                break;
			            case 'minute':
			                time = this._d.valueOf();
			                time -= mod$1(time, MS_PER_MINUTE);
			                break;
			            case 'second':
			                time = this._d.valueOf();
			                time -= mod$1(time, MS_PER_SECOND);
			                break;
			        }

			        this._d.setTime(time);
			        hooks.updateOffset(this, true);
			        return this;
			    }

			    function endOf(units) {
			        var time, startOfDate;
			        units = normalizeUnits(units);
			        if (units === undefined || units === 'millisecond' || !this.isValid()) {
			            return this;
			        }

			        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

			        switch (units) {
			            case 'year':
			                time = startOfDate(this.year() + 1, 0, 1) - 1;
			                break;
			            case 'quarter':
			                time =
			                    startOfDate(
			                        this.year(),
			                        this.month() - (this.month() % 3) + 3,
			                        1
			                    ) - 1;
			                break;
			            case 'month':
			                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
			                break;
			            case 'week':
			                time =
			                    startOfDate(
			                        this.year(),
			                        this.month(),
			                        this.date() - this.weekday() + 7
			                    ) - 1;
			                break;
			            case 'isoWeek':
			                time =
			                    startOfDate(
			                        this.year(),
			                        this.month(),
			                        this.date() - (this.isoWeekday() - 1) + 7
			                    ) - 1;
			                break;
			            case 'day':
			            case 'date':
			                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
			                break;
			            case 'hour':
			                time = this._d.valueOf();
			                time +=
			                    MS_PER_HOUR -
			                    mod$1(
			                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
			                        MS_PER_HOUR
			                    ) -
			                    1;
			                break;
			            case 'minute':
			                time = this._d.valueOf();
			                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
			                break;
			            case 'second':
			                time = this._d.valueOf();
			                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
			                break;
			        }

			        this._d.setTime(time);
			        hooks.updateOffset(this, true);
			        return this;
			    }

			    function valueOf() {
			        return this._d.valueOf() - (this._offset || 0) * 60000;
			    }

			    function unix() {
			        return Math.floor(this.valueOf() / 1000);
			    }

			    function toDate() {
			        return new Date(this.valueOf());
			    }

			    function toArray() {
			        var m = this;
			        return [
			            m.year(),
			            m.month(),
			            m.date(),
			            m.hour(),
			            m.minute(),
			            m.second(),
			            m.millisecond(),
			        ];
			    }

			    function toObject() {
			        var m = this;
			        return {
			            years: m.year(),
			            months: m.month(),
			            date: m.date(),
			            hours: m.hours(),
			            minutes: m.minutes(),
			            seconds: m.seconds(),
			            milliseconds: m.milliseconds(),
			        };
			    }

			    function toJSON() {
			        // new Date(NaN).toJSON() === null
			        return this.isValid() ? this.toISOString() : null;
			    }

			    function isValid$2() {
			        return isValid(this);
			    }

			    function parsingFlags() {
			        return extend({}, getParsingFlags(this));
			    }

			    function invalidAt() {
			        return getParsingFlags(this).overflow;
			    }

			    function creationData() {
			        return {
			            input: this._i,
			            format: this._f,
			            locale: this._locale,
			            isUTC: this._isUTC,
			            strict: this._strict,
			        };
			    }

			    addFormatToken('N', 0, 0, 'eraAbbr');
			    addFormatToken('NN', 0, 0, 'eraAbbr');
			    addFormatToken('NNN', 0, 0, 'eraAbbr');
			    addFormatToken('NNNN', 0, 0, 'eraName');
			    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

			    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
			    addFormatToken('y', ['yy', 2], 0, 'eraYear');
			    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
			    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

			    addRegexToken('N', matchEraAbbr);
			    addRegexToken('NN', matchEraAbbr);
			    addRegexToken('NNN', matchEraAbbr);
			    addRegexToken('NNNN', matchEraName);
			    addRegexToken('NNNNN', matchEraNarrow);

			    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
			        input,
			        array,
			        config,
			        token
			    ) {
			        var era = config._locale.erasParse(input, token, config._strict);
			        if (era) {
			            getParsingFlags(config).era = era;
			        } else {
			            getParsingFlags(config).invalidEra = input;
			        }
			    });

			    addRegexToken('y', matchUnsigned);
			    addRegexToken('yy', matchUnsigned);
			    addRegexToken('yyy', matchUnsigned);
			    addRegexToken('yyyy', matchUnsigned);
			    addRegexToken('yo', matchEraYearOrdinal);

			    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
			    addParseToken(['yo'], function (input, array, config, token) {
			        var match;
			        if (config._locale._eraYearOrdinalRegex) {
			            match = input.match(config._locale._eraYearOrdinalRegex);
			        }

			        if (config._locale.eraYearOrdinalParse) {
			            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
			        } else {
			            array[YEAR] = parseInt(input, 10);
			        }
			    });

			    function localeEras(m, format) {
			        var i,
			            l,
			            date,
			            eras = this._eras || getLocale('en')._eras;
			        for (i = 0, l = eras.length; i < l; ++i) {
			            switch (typeof eras[i].since) {
			                case 'string':
			                    // truncate time
			                    date = hooks(eras[i].since).startOf('day');
			                    eras[i].since = date.valueOf();
			                    break;
			            }

			            switch (typeof eras[i].until) {
			                case 'undefined':
			                    eras[i].until = +Infinity;
			                    break;
			                case 'string':
			                    // truncate time
			                    date = hooks(eras[i].until).startOf('day').valueOf();
			                    eras[i].until = date.valueOf();
			                    break;
			            }
			        }
			        return eras;
			    }

			    function localeErasParse(eraName, format, strict) {
			        var i,
			            l,
			            eras = this.eras(),
			            name,
			            abbr,
			            narrow;
			        eraName = eraName.toUpperCase();

			        for (i = 0, l = eras.length; i < l; ++i) {
			            name = eras[i].name.toUpperCase();
			            abbr = eras[i].abbr.toUpperCase();
			            narrow = eras[i].narrow.toUpperCase();

			            if (strict) {
			                switch (format) {
			                    case 'N':
			                    case 'NN':
			                    case 'NNN':
			                        if (abbr === eraName) {
			                            return eras[i];
			                        }
			                        break;

			                    case 'NNNN':
			                        if (name === eraName) {
			                            return eras[i];
			                        }
			                        break;

			                    case 'NNNNN':
			                        if (narrow === eraName) {
			                            return eras[i];
			                        }
			                        break;
			                }
			            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
			                return eras[i];
			            }
			        }
			    }

			    function localeErasConvertYear(era, year) {
			        var dir = era.since <= era.until ? +1 : -1;
			        if (year === undefined) {
			            return hooks(era.since).year();
			        } else {
			            return hooks(era.since).year() + (year - era.offset) * dir;
			        }
			    }

			    function getEraName() {
			        var i,
			            l,
			            val,
			            eras = this.localeData().eras();
			        for (i = 0, l = eras.length; i < l; ++i) {
			            // truncate time
			            val = this.startOf('day').valueOf();

			            if (eras[i].since <= val && val <= eras[i].until) {
			                return eras[i].name;
			            }
			            if (eras[i].until <= val && val <= eras[i].since) {
			                return eras[i].name;
			            }
			        }

			        return '';
			    }

			    function getEraNarrow() {
			        var i,
			            l,
			            val,
			            eras = this.localeData().eras();
			        for (i = 0, l = eras.length; i < l; ++i) {
			            // truncate time
			            val = this.startOf('day').valueOf();

			            if (eras[i].since <= val && val <= eras[i].until) {
			                return eras[i].narrow;
			            }
			            if (eras[i].until <= val && val <= eras[i].since) {
			                return eras[i].narrow;
			            }
			        }

			        return '';
			    }

			    function getEraAbbr() {
			        var i,
			            l,
			            val,
			            eras = this.localeData().eras();
			        for (i = 0, l = eras.length; i < l; ++i) {
			            // truncate time
			            val = this.startOf('day').valueOf();

			            if (eras[i].since <= val && val <= eras[i].until) {
			                return eras[i].abbr;
			            }
			            if (eras[i].until <= val && val <= eras[i].since) {
			                return eras[i].abbr;
			            }
			        }

			        return '';
			    }

			    function getEraYear() {
			        var i,
			            l,
			            dir,
			            val,
			            eras = this.localeData().eras();
			        for (i = 0, l = eras.length; i < l; ++i) {
			            dir = eras[i].since <= eras[i].until ? +1 : -1;

			            // truncate time
			            val = this.startOf('day').valueOf();

			            if (
			                (eras[i].since <= val && val <= eras[i].until) ||
			                (eras[i].until <= val && val <= eras[i].since)
			            ) {
			                return (
			                    (this.year() - hooks(eras[i].since).year()) * dir +
			                    eras[i].offset
			                );
			            }
			        }

			        return this.year();
			    }

			    function erasNameRegex(isStrict) {
			        if (!hasOwnProp(this, '_erasNameRegex')) {
			            computeErasParse.call(this);
			        }
			        return isStrict ? this._erasNameRegex : this._erasRegex;
			    }

			    function erasAbbrRegex(isStrict) {
			        if (!hasOwnProp(this, '_erasAbbrRegex')) {
			            computeErasParse.call(this);
			        }
			        return isStrict ? this._erasAbbrRegex : this._erasRegex;
			    }

			    function erasNarrowRegex(isStrict) {
			        if (!hasOwnProp(this, '_erasNarrowRegex')) {
			            computeErasParse.call(this);
			        }
			        return isStrict ? this._erasNarrowRegex : this._erasRegex;
			    }

			    function matchEraAbbr(isStrict, locale) {
			        return locale.erasAbbrRegex(isStrict);
			    }

			    function matchEraName(isStrict, locale) {
			        return locale.erasNameRegex(isStrict);
			    }

			    function matchEraNarrow(isStrict, locale) {
			        return locale.erasNarrowRegex(isStrict);
			    }

			    function matchEraYearOrdinal(isStrict, locale) {
			        return locale._eraYearOrdinalRegex || matchUnsigned;
			    }

			    function computeErasParse() {
			        var abbrPieces = [],
			            namePieces = [],
			            narrowPieces = [],
			            mixedPieces = [],
			            i,
			            l,
			            eras = this.eras();

			        for (i = 0, l = eras.length; i < l; ++i) {
			            namePieces.push(regexEscape(eras[i].name));
			            abbrPieces.push(regexEscape(eras[i].abbr));
			            narrowPieces.push(regexEscape(eras[i].narrow));

			            mixedPieces.push(regexEscape(eras[i].name));
			            mixedPieces.push(regexEscape(eras[i].abbr));
			            mixedPieces.push(regexEscape(eras[i].narrow));
			        }

			        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
			        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
			        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
			        this._erasNarrowRegex = new RegExp(
			            '^(' + narrowPieces.join('|') + ')',
			            'i'
			        );
			    }

			    // FORMATTING

			    addFormatToken(0, ['gg', 2], 0, function () {
			        return this.weekYear() % 100;
			    });

			    addFormatToken(0, ['GG', 2], 0, function () {
			        return this.isoWeekYear() % 100;
			    });

			    function addWeekYearFormatToken(token, getter) {
			        addFormatToken(0, [token, token.length], 0, getter);
			    }

			    addWeekYearFormatToken('gggg', 'weekYear');
			    addWeekYearFormatToken('ggggg', 'weekYear');
			    addWeekYearFormatToken('GGGG', 'isoWeekYear');
			    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

			    // ALIASES

			    addUnitAlias('weekYear', 'gg');
			    addUnitAlias('isoWeekYear', 'GG');

			    // PRIORITY

			    addUnitPriority('weekYear', 1);
			    addUnitPriority('isoWeekYear', 1);

			    // PARSING

			    addRegexToken('G', matchSigned);
			    addRegexToken('g', matchSigned);
			    addRegexToken('GG', match1to2, match2);
			    addRegexToken('gg', match1to2, match2);
			    addRegexToken('GGGG', match1to4, match4);
			    addRegexToken('gggg', match1to4, match4);
			    addRegexToken('GGGGG', match1to6, match6);
			    addRegexToken('ggggg', match1to6, match6);

			    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
			        input,
			        week,
			        config,
			        token
			    ) {
			        week[token.substr(0, 2)] = toInt(input);
			    });

			    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
			        week[token] = hooks.parseTwoDigitYear(input);
			    });

			    // MOMENTS

			    function getSetWeekYear(input) {
			        return getSetWeekYearHelper.call(
			            this,
			            input,
			            this.week(),
			            this.weekday(),
			            this.localeData()._week.dow,
			            this.localeData()._week.doy
			        );
			    }

			    function getSetISOWeekYear(input) {
			        return getSetWeekYearHelper.call(
			            this,
			            input,
			            this.isoWeek(),
			            this.isoWeekday(),
			            1,
			            4
			        );
			    }

			    function getISOWeeksInYear() {
			        return weeksInYear(this.year(), 1, 4);
			    }

			    function getISOWeeksInISOWeekYear() {
			        return weeksInYear(this.isoWeekYear(), 1, 4);
			    }

			    function getWeeksInYear() {
			        var weekInfo = this.localeData()._week;
			        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
			    }

			    function getWeeksInWeekYear() {
			        var weekInfo = this.localeData()._week;
			        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
			    }

			    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
			        var weeksTarget;
			        if (input == null) {
			            return weekOfYear(this, dow, doy).year;
			        } else {
			            weeksTarget = weeksInYear(input, dow, doy);
			            if (week > weeksTarget) {
			                week = weeksTarget;
			            }
			            return setWeekAll.call(this, input, week, weekday, dow, doy);
			        }
			    }

			    function setWeekAll(weekYear, week, weekday, dow, doy) {
			        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
			            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

			        this.year(date.getUTCFullYear());
			        this.month(date.getUTCMonth());
			        this.date(date.getUTCDate());
			        return this;
			    }

			    // FORMATTING

			    addFormatToken('Q', 0, 'Qo', 'quarter');

			    // ALIASES

			    addUnitAlias('quarter', 'Q');

			    // PRIORITY

			    addUnitPriority('quarter', 7);

			    // PARSING

			    addRegexToken('Q', match1);
			    addParseToken('Q', function (input, array) {
			        array[MONTH] = (toInt(input) - 1) * 3;
			    });

			    // MOMENTS

			    function getSetQuarter(input) {
			        return input == null
			            ? Math.ceil((this.month() + 1) / 3)
			            : this.month((input - 1) * 3 + (this.month() % 3));
			    }

			    // FORMATTING

			    addFormatToken('D', ['DD', 2], 'Do', 'date');

			    // ALIASES

			    addUnitAlias('date', 'D');

			    // PRIORITY
			    addUnitPriority('date', 9);

			    // PARSING

			    addRegexToken('D', match1to2);
			    addRegexToken('DD', match1to2, match2);
			    addRegexToken('Do', function (isStrict, locale) {
			        // TODO: Remove "ordinalParse" fallback in next major release.
			        return isStrict
			            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
			            : locale._dayOfMonthOrdinalParseLenient;
			    });

			    addParseToken(['D', 'DD'], DATE);
			    addParseToken('Do', function (input, array) {
			        array[DATE] = toInt(input.match(match1to2)[0]);
			    });

			    // MOMENTS

			    var getSetDayOfMonth = makeGetSet('Date', true);

			    // FORMATTING

			    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

			    // ALIASES

			    addUnitAlias('dayOfYear', 'DDD');

			    // PRIORITY
			    addUnitPriority('dayOfYear', 4);

			    // PARSING

			    addRegexToken('DDD', match1to3);
			    addRegexToken('DDDD', match3);
			    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
			        config._dayOfYear = toInt(input);
			    });

			    // HELPERS

			    // MOMENTS

			    function getSetDayOfYear(input) {
			        var dayOfYear =
			            Math.round(
			                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
			            ) + 1;
			        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
			    }

			    // FORMATTING

			    addFormatToken('m', ['mm', 2], 0, 'minute');

			    // ALIASES

			    addUnitAlias('minute', 'm');

			    // PRIORITY

			    addUnitPriority('minute', 14);

			    // PARSING

			    addRegexToken('m', match1to2);
			    addRegexToken('mm', match1to2, match2);
			    addParseToken(['m', 'mm'], MINUTE);

			    // MOMENTS

			    var getSetMinute = makeGetSet('Minutes', false);

			    // FORMATTING

			    addFormatToken('s', ['ss', 2], 0, 'second');

			    // ALIASES

			    addUnitAlias('second', 's');

			    // PRIORITY

			    addUnitPriority('second', 15);

			    // PARSING

			    addRegexToken('s', match1to2);
			    addRegexToken('ss', match1to2, match2);
			    addParseToken(['s', 'ss'], SECOND);

			    // MOMENTS

			    var getSetSecond = makeGetSet('Seconds', false);

			    // FORMATTING

			    addFormatToken('S', 0, 0, function () {
			        return ~~(this.millisecond() / 100);
			    });

			    addFormatToken(0, ['SS', 2], 0, function () {
			        return ~~(this.millisecond() / 10);
			    });

			    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
			    addFormatToken(0, ['SSSS', 4], 0, function () {
			        return this.millisecond() * 10;
			    });
			    addFormatToken(0, ['SSSSS', 5], 0, function () {
			        return this.millisecond() * 100;
			    });
			    addFormatToken(0, ['SSSSSS', 6], 0, function () {
			        return this.millisecond() * 1000;
			    });
			    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
			        return this.millisecond() * 10000;
			    });
			    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
			        return this.millisecond() * 100000;
			    });
			    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
			        return this.millisecond() * 1000000;
			    });

			    // ALIASES

			    addUnitAlias('millisecond', 'ms');

			    // PRIORITY

			    addUnitPriority('millisecond', 16);

			    // PARSING

			    addRegexToken('S', match1to3, match1);
			    addRegexToken('SS', match1to3, match2);
			    addRegexToken('SSS', match1to3, match3);

			    var token, getSetMillisecond;
			    for (token = 'SSSS'; token.length <= 9; token += 'S') {
			        addRegexToken(token, matchUnsigned);
			    }

			    function parseMs(input, array) {
			        array[MILLISECOND] = toInt(('0.' + input) * 1000);
			    }

			    for (token = 'S'; token.length <= 9; token += 'S') {
			        addParseToken(token, parseMs);
			    }

			    getSetMillisecond = makeGetSet('Milliseconds', false);

			    // FORMATTING

			    addFormatToken('z', 0, 0, 'zoneAbbr');
			    addFormatToken('zz', 0, 0, 'zoneName');

			    // MOMENTS

			    function getZoneAbbr() {
			        return this._isUTC ? 'UTC' : '';
			    }

			    function getZoneName() {
			        return this._isUTC ? 'Coordinated Universal Time' : '';
			    }

			    var proto = Moment.prototype;

			    proto.add = add;
			    proto.calendar = calendar$1;
			    proto.clone = clone;
			    proto.diff = diff;
			    proto.endOf = endOf;
			    proto.format = format;
			    proto.from = from;
			    proto.fromNow = fromNow;
			    proto.to = to;
			    proto.toNow = toNow;
			    proto.get = stringGet;
			    proto.invalidAt = invalidAt;
			    proto.isAfter = isAfter;
			    proto.isBefore = isBefore;
			    proto.isBetween = isBetween;
			    proto.isSame = isSame;
			    proto.isSameOrAfter = isSameOrAfter;
			    proto.isSameOrBefore = isSameOrBefore;
			    proto.isValid = isValid$2;
			    proto.lang = lang;
			    proto.locale = locale;
			    proto.localeData = localeData;
			    proto.max = prototypeMax;
			    proto.min = prototypeMin;
			    proto.parsingFlags = parsingFlags;
			    proto.set = stringSet;
			    proto.startOf = startOf;
			    proto.subtract = subtract;
			    proto.toArray = toArray;
			    proto.toObject = toObject;
			    proto.toDate = toDate;
			    proto.toISOString = toISOString;
			    proto.inspect = inspect;
			    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
			        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
			            return 'Moment<' + this.format() + '>';
			        };
			    }
			    proto.toJSON = toJSON;
			    proto.toString = toString;
			    proto.unix = unix;
			    proto.valueOf = valueOf;
			    proto.creationData = creationData;
			    proto.eraName = getEraName;
			    proto.eraNarrow = getEraNarrow;
			    proto.eraAbbr = getEraAbbr;
			    proto.eraYear = getEraYear;
			    proto.year = getSetYear;
			    proto.isLeapYear = getIsLeapYear;
			    proto.weekYear = getSetWeekYear;
			    proto.isoWeekYear = getSetISOWeekYear;
			    proto.quarter = proto.quarters = getSetQuarter;
			    proto.month = getSetMonth;
			    proto.daysInMonth = getDaysInMonth;
			    proto.week = proto.weeks = getSetWeek;
			    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
			    proto.weeksInYear = getWeeksInYear;
			    proto.weeksInWeekYear = getWeeksInWeekYear;
			    proto.isoWeeksInYear = getISOWeeksInYear;
			    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
			    proto.date = getSetDayOfMonth;
			    proto.day = proto.days = getSetDayOfWeek;
			    proto.weekday = getSetLocaleDayOfWeek;
			    proto.isoWeekday = getSetISODayOfWeek;
			    proto.dayOfYear = getSetDayOfYear;
			    proto.hour = proto.hours = getSetHour;
			    proto.minute = proto.minutes = getSetMinute;
			    proto.second = proto.seconds = getSetSecond;
			    proto.millisecond = proto.milliseconds = getSetMillisecond;
			    proto.utcOffset = getSetOffset;
			    proto.utc = setOffsetToUTC;
			    proto.local = setOffsetToLocal;
			    proto.parseZone = setOffsetToParsedOffset;
			    proto.hasAlignedHourOffset = hasAlignedHourOffset;
			    proto.isDST = isDaylightSavingTime;
			    proto.isLocal = isLocal;
			    proto.isUtcOffset = isUtcOffset;
			    proto.isUtc = isUtc;
			    proto.isUTC = isUtc;
			    proto.zoneAbbr = getZoneAbbr;
			    proto.zoneName = getZoneName;
			    proto.dates = deprecate(
			        'dates accessor is deprecated. Use date instead.',
			        getSetDayOfMonth
			    );
			    proto.months = deprecate(
			        'months accessor is deprecated. Use month instead',
			        getSetMonth
			    );
			    proto.years = deprecate(
			        'years accessor is deprecated. Use year instead',
			        getSetYear
			    );
			    proto.zone = deprecate(
			        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
			        getSetZone
			    );
			    proto.isDSTShifted = deprecate(
			        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
			        isDaylightSavingTimeShifted
			    );

			    function createUnix(input) {
			        return createLocal(input * 1000);
			    }

			    function createInZone() {
			        return createLocal.apply(null, arguments).parseZone();
			    }

			    function preParsePostFormat(string) {
			        return string;
			    }

			    var proto$1 = Locale.prototype;

			    proto$1.calendar = calendar;
			    proto$1.longDateFormat = longDateFormat;
			    proto$1.invalidDate = invalidDate;
			    proto$1.ordinal = ordinal;
			    proto$1.preparse = preParsePostFormat;
			    proto$1.postformat = preParsePostFormat;
			    proto$1.relativeTime = relativeTime;
			    proto$1.pastFuture = pastFuture;
			    proto$1.set = set;
			    proto$1.eras = localeEras;
			    proto$1.erasParse = localeErasParse;
			    proto$1.erasConvertYear = localeErasConvertYear;
			    proto$1.erasAbbrRegex = erasAbbrRegex;
			    proto$1.erasNameRegex = erasNameRegex;
			    proto$1.erasNarrowRegex = erasNarrowRegex;

			    proto$1.months = localeMonths;
			    proto$1.monthsShort = localeMonthsShort;
			    proto$1.monthsParse = localeMonthsParse;
			    proto$1.monthsRegex = monthsRegex;
			    proto$1.monthsShortRegex = monthsShortRegex;
			    proto$1.week = localeWeek;
			    proto$1.firstDayOfYear = localeFirstDayOfYear;
			    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

			    proto$1.weekdays = localeWeekdays;
			    proto$1.weekdaysMin = localeWeekdaysMin;
			    proto$1.weekdaysShort = localeWeekdaysShort;
			    proto$1.weekdaysParse = localeWeekdaysParse;

			    proto$1.weekdaysRegex = weekdaysRegex;
			    proto$1.weekdaysShortRegex = weekdaysShortRegex;
			    proto$1.weekdaysMinRegex = weekdaysMinRegex;

			    proto$1.isPM = localeIsPM;
			    proto$1.meridiem = localeMeridiem;

			    function get$1(format, index, field, setter) {
			        var locale = getLocale(),
			            utc = createUTC().set(setter, index);
			        return locale[field](utc, format);
			    }

			    function listMonthsImpl(format, index, field) {
			        if (isNumber(format)) {
			            index = format;
			            format = undefined;
			        }

			        format = format || '';

			        if (index != null) {
			            return get$1(format, index, field, 'month');
			        }

			        var i,
			            out = [];
			        for (i = 0; i < 12; i++) {
			            out[i] = get$1(format, i, field, 'month');
			        }
			        return out;
			    }

			    // ()
			    // (5)
			    // (fmt, 5)
			    // (fmt)
			    // (true)
			    // (true, 5)
			    // (true, fmt, 5)
			    // (true, fmt)
			    function listWeekdaysImpl(localeSorted, format, index, field) {
			        if (typeof localeSorted === 'boolean') {
			            if (isNumber(format)) {
			                index = format;
			                format = undefined;
			            }

			            format = format || '';
			        } else {
			            format = localeSorted;
			            index = format;
			            localeSorted = false;

			            if (isNumber(format)) {
			                index = format;
			                format = undefined;
			            }

			            format = format || '';
			        }

			        var locale = getLocale(),
			            shift = localeSorted ? locale._week.dow : 0,
			            i,
			            out = [];

			        if (index != null) {
			            return get$1(format, (index + shift) % 7, field, 'day');
			        }

			        for (i = 0; i < 7; i++) {
			            out[i] = get$1(format, (i + shift) % 7, field, 'day');
			        }
			        return out;
			    }

			    function listMonths(format, index) {
			        return listMonthsImpl(format, index, 'months');
			    }

			    function listMonthsShort(format, index) {
			        return listMonthsImpl(format, index, 'monthsShort');
			    }

			    function listWeekdays(localeSorted, format, index) {
			        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
			    }

			    function listWeekdaysShort(localeSorted, format, index) {
			        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
			    }

			    function listWeekdaysMin(localeSorted, format, index) {
			        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
			    }

			    getSetGlobalLocale('en', {
			        eras: [
			            {
			                since: '0001-01-01',
			                until: +Infinity,
			                offset: 1,
			                name: 'Anno Domini',
			                narrow: 'AD',
			                abbr: 'AD',
			            },
			            {
			                since: '0000-12-31',
			                until: -Infinity,
			                offset: 1,
			                name: 'Before Christ',
			                narrow: 'BC',
			                abbr: 'BC',
			            },
			        ],
			        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			        ordinal: function (number) {
			            var b = number % 10,
			                output =
			                    toInt((number % 100) / 10) === 1
			                        ? 'th'
			                        : b === 1
			                        ? 'st'
			                        : b === 2
			                        ? 'nd'
			                        : b === 3
			                        ? 'rd'
			                        : 'th';
			            return number + output;
			        },
			    });

			    // Side effect imports

			    hooks.lang = deprecate(
			        'moment.lang is deprecated. Use moment.locale instead.',
			        getSetGlobalLocale
			    );
			    hooks.langData = deprecate(
			        'moment.langData is deprecated. Use moment.localeData instead.',
			        getLocale
			    );

			    var mathAbs = Math.abs;

			    function abs() {
			        var data = this._data;

			        this._milliseconds = mathAbs(this._milliseconds);
			        this._days = mathAbs(this._days);
			        this._months = mathAbs(this._months);

			        data.milliseconds = mathAbs(data.milliseconds);
			        data.seconds = mathAbs(data.seconds);
			        data.minutes = mathAbs(data.minutes);
			        data.hours = mathAbs(data.hours);
			        data.months = mathAbs(data.months);
			        data.years = mathAbs(data.years);

			        return this;
			    }

			    function addSubtract$1(duration, input, value, direction) {
			        var other = createDuration(input, value);

			        duration._milliseconds += direction * other._milliseconds;
			        duration._days += direction * other._days;
			        duration._months += direction * other._months;

			        return duration._bubble();
			    }

			    // supports only 2.0-style add(1, 's') or add(duration)
			    function add$1(input, value) {
			        return addSubtract$1(this, input, value, 1);
			    }

			    // supports only 2.0-style subtract(1, 's') or subtract(duration)
			    function subtract$1(input, value) {
			        return addSubtract$1(this, input, value, -1);
			    }

			    function absCeil(number) {
			        if (number < 0) {
			            return Math.floor(number);
			        } else {
			            return Math.ceil(number);
			        }
			    }

			    function bubble() {
			        var milliseconds = this._milliseconds,
			            days = this._days,
			            months = this._months,
			            data = this._data,
			            seconds,
			            minutes,
			            hours,
			            years,
			            monthsFromDays;

			        // if we have a mix of positive and negative values, bubble down first
			        // check: https://github.com/moment/moment/issues/2166
			        if (
			            !(
			                (milliseconds >= 0 && days >= 0 && months >= 0) ||
			                (milliseconds <= 0 && days <= 0 && months <= 0)
			            )
			        ) {
			            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
			            days = 0;
			            months = 0;
			        }

			        // The following code bubbles up values, see the tests for
			        // examples of what that means.
			        data.milliseconds = milliseconds % 1000;

			        seconds = absFloor(milliseconds / 1000);
			        data.seconds = seconds % 60;

			        minutes = absFloor(seconds / 60);
			        data.minutes = minutes % 60;

			        hours = absFloor(minutes / 60);
			        data.hours = hours % 24;

			        days += absFloor(hours / 24);

			        // convert days to months
			        monthsFromDays = absFloor(daysToMonths(days));
			        months += monthsFromDays;
			        days -= absCeil(monthsToDays(monthsFromDays));

			        // 12 months -> 1 year
			        years = absFloor(months / 12);
			        months %= 12;

			        data.days = days;
			        data.months = months;
			        data.years = years;

			        return this;
			    }

			    function daysToMonths(days) {
			        // 400 years have 146097 days (taking into account leap year rules)
			        // 400 years have 12 months === 4800
			        return (days * 4800) / 146097;
			    }

			    function monthsToDays(months) {
			        // the reverse of daysToMonths
			        return (months * 146097) / 4800;
			    }

			    function as(units) {
			        if (!this.isValid()) {
			            return NaN;
			        }
			        var days,
			            months,
			            milliseconds = this._milliseconds;

			        units = normalizeUnits(units);

			        if (units === 'month' || units === 'quarter' || units === 'year') {
			            days = this._days + milliseconds / 864e5;
			            months = this._months + daysToMonths(days);
			            switch (units) {
			                case 'month':
			                    return months;
			                case 'quarter':
			                    return months / 3;
			                case 'year':
			                    return months / 12;
			            }
			        } else {
			            // handle milliseconds separately because of floating point math errors (issue #1867)
			            days = this._days + Math.round(monthsToDays(this._months));
			            switch (units) {
			                case 'week':
			                    return days / 7 + milliseconds / 6048e5;
			                case 'day':
			                    return days + milliseconds / 864e5;
			                case 'hour':
			                    return days * 24 + milliseconds / 36e5;
			                case 'minute':
			                    return days * 1440 + milliseconds / 6e4;
			                case 'second':
			                    return days * 86400 + milliseconds / 1000;
			                // Math.floor prevents floating point math errors here
			                case 'millisecond':
			                    return Math.floor(days * 864e5) + milliseconds;
			                default:
			                    throw new Error('Unknown unit ' + units);
			            }
			        }
			    }

			    // TODO: Use this.as('ms')?
			    function valueOf$1() {
			        if (!this.isValid()) {
			            return NaN;
			        }
			        return (
			            this._milliseconds +
			            this._days * 864e5 +
			            (this._months % 12) * 2592e6 +
			            toInt(this._months / 12) * 31536e6
			        );
			    }

			    function makeAs(alias) {
			        return function () {
			            return this.as(alias);
			        };
			    }

			    var asMilliseconds = makeAs('ms'),
			        asSeconds = makeAs('s'),
			        asMinutes = makeAs('m'),
			        asHours = makeAs('h'),
			        asDays = makeAs('d'),
			        asWeeks = makeAs('w'),
			        asMonths = makeAs('M'),
			        asQuarters = makeAs('Q'),
			        asYears = makeAs('y');

			    function clone$1() {
			        return createDuration(this);
			    }

			    function get$2(units) {
			        units = normalizeUnits(units);
			        return this.isValid() ? this[units + 's']() : NaN;
			    }

			    function makeGetter(name) {
			        return function () {
			            return this.isValid() ? this._data[name] : NaN;
			        };
			    }

			    var milliseconds = makeGetter('milliseconds'),
			        seconds = makeGetter('seconds'),
			        minutes = makeGetter('minutes'),
			        hours = makeGetter('hours'),
			        days = makeGetter('days'),
			        months = makeGetter('months'),
			        years = makeGetter('years');

			    function weeks() {
			        return absFloor(this.days() / 7);
			    }

			    var round = Math.round,
			        thresholds = {
			            ss: 44, // a few seconds to seconds
			            s: 45, // seconds to minute
			            m: 45, // minutes to hour
			            h: 22, // hours to day
			            d: 26, // days to month/week
			            w: null, // weeks to month
			            M: 11, // months to year
			        };

			    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
			    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
			        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
			    }

			    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
			        var duration = createDuration(posNegDuration).abs(),
			            seconds = round(duration.as('s')),
			            minutes = round(duration.as('m')),
			            hours = round(duration.as('h')),
			            days = round(duration.as('d')),
			            months = round(duration.as('M')),
			            weeks = round(duration.as('w')),
			            years = round(duration.as('y')),
			            a =
			                (seconds <= thresholds.ss && ['s', seconds]) ||
			                (seconds < thresholds.s && ['ss', seconds]) ||
			                (minutes <= 1 && ['m']) ||
			                (minutes < thresholds.m && ['mm', minutes]) ||
			                (hours <= 1 && ['h']) ||
			                (hours < thresholds.h && ['hh', hours]) ||
			                (days <= 1 && ['d']) ||
			                (days < thresholds.d && ['dd', days]);

			        if (thresholds.w != null) {
			            a =
			                a ||
			                (weeks <= 1 && ['w']) ||
			                (weeks < thresholds.w && ['ww', weeks]);
			        }
			        a = a ||
			            (months <= 1 && ['M']) ||
			            (months < thresholds.M && ['MM', months]) ||
			            (years <= 1 && ['y']) || ['yy', years];

			        a[2] = withoutSuffix;
			        a[3] = +posNegDuration > 0;
			        a[4] = locale;
			        return substituteTimeAgo.apply(null, a);
			    }

			    // This function allows you to set the rounding function for relative time strings
			    function getSetRelativeTimeRounding(roundingFunction) {
			        if (roundingFunction === undefined) {
			            return round;
			        }
			        if (typeof roundingFunction === 'function') {
			            round = roundingFunction;
			            return true;
			        }
			        return false;
			    }

			    // This function allows you to set a threshold for relative time strings
			    function getSetRelativeTimeThreshold(threshold, limit) {
			        if (thresholds[threshold] === undefined) {
			            return false;
			        }
			        if (limit === undefined) {
			            return thresholds[threshold];
			        }
			        thresholds[threshold] = limit;
			        if (threshold === 's') {
			            thresholds.ss = limit - 1;
			        }
			        return true;
			    }

			    function humanize(argWithSuffix, argThresholds) {
			        if (!this.isValid()) {
			            return this.localeData().invalidDate();
			        }

			        var withSuffix = false,
			            th = thresholds,
			            locale,
			            output;

			        if (typeof argWithSuffix === 'object') {
			            argThresholds = argWithSuffix;
			            argWithSuffix = false;
			        }
			        if (typeof argWithSuffix === 'boolean') {
			            withSuffix = argWithSuffix;
			        }
			        if (typeof argThresholds === 'object') {
			            th = Object.assign({}, thresholds, argThresholds);
			            if (argThresholds.s != null && argThresholds.ss == null) {
			                th.ss = argThresholds.s - 1;
			            }
			        }

			        locale = this.localeData();
			        output = relativeTime$1(this, !withSuffix, th, locale);

			        if (withSuffix) {
			            output = locale.pastFuture(+this, output);
			        }

			        return locale.postformat(output);
			    }

			    var abs$1 = Math.abs;

			    function sign(x) {
			        return (x > 0) - (x < 0) || +x;
			    }

			    function toISOString$1() {
			        // for ISO strings we do not use the normal bubbling rules:
			        //  * milliseconds bubble up until they become hours
			        //  * days do not bubble at all
			        //  * months bubble up until they become years
			        // This is because there is no context-free conversion between hours and days
			        // (think of clock changes)
			        // and also not between days and months (28-31 days per month)
			        if (!this.isValid()) {
			            return this.localeData().invalidDate();
			        }

			        var seconds = abs$1(this._milliseconds) / 1000,
			            days = abs$1(this._days),
			            months = abs$1(this._months),
			            minutes,
			            hours,
			            years,
			            s,
			            total = this.asSeconds(),
			            totalSign,
			            ymSign,
			            daysSign,
			            hmsSign;

			        if (!total) {
			            // this is the same as C#'s (Noda) and python (isodate)...
			            // but not other JS (goog.date)
			            return 'P0D';
			        }

			        // 3600 seconds -> 60 minutes -> 1 hour
			        minutes = absFloor(seconds / 60);
			        hours = absFloor(minutes / 60);
			        seconds %= 60;
			        minutes %= 60;

			        // 12 months -> 1 year
			        years = absFloor(months / 12);
			        months %= 12;

			        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
			        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

			        totalSign = total < 0 ? '-' : '';
			        ymSign = sign(this._months) !== sign(total) ? '-' : '';
			        daysSign = sign(this._days) !== sign(total) ? '-' : '';
			        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

			        return (
			            totalSign +
			            'P' +
			            (years ? ymSign + years + 'Y' : '') +
			            (months ? ymSign + months + 'M' : '') +
			            (days ? daysSign + days + 'D' : '') +
			            (hours || minutes || seconds ? 'T' : '') +
			            (hours ? hmsSign + hours + 'H' : '') +
			            (minutes ? hmsSign + minutes + 'M' : '') +
			            (seconds ? hmsSign + s + 'S' : '')
			        );
			    }

			    var proto$2 = Duration.prototype;

			    proto$2.isValid = isValid$1;
			    proto$2.abs = abs;
			    proto$2.add = add$1;
			    proto$2.subtract = subtract$1;
			    proto$2.as = as;
			    proto$2.asMilliseconds = asMilliseconds;
			    proto$2.asSeconds = asSeconds;
			    proto$2.asMinutes = asMinutes;
			    proto$2.asHours = asHours;
			    proto$2.asDays = asDays;
			    proto$2.asWeeks = asWeeks;
			    proto$2.asMonths = asMonths;
			    proto$2.asQuarters = asQuarters;
			    proto$2.asYears = asYears;
			    proto$2.valueOf = valueOf$1;
			    proto$2._bubble = bubble;
			    proto$2.clone = clone$1;
			    proto$2.get = get$2;
			    proto$2.milliseconds = milliseconds;
			    proto$2.seconds = seconds;
			    proto$2.minutes = minutes;
			    proto$2.hours = hours;
			    proto$2.days = days;
			    proto$2.weeks = weeks;
			    proto$2.months = months;
			    proto$2.years = years;
			    proto$2.humanize = humanize;
			    proto$2.toISOString = toISOString$1;
			    proto$2.toString = toISOString$1;
			    proto$2.toJSON = toISOString$1;
			    proto$2.locale = locale;
			    proto$2.localeData = localeData;

			    proto$2.toIsoString = deprecate(
			        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
			        toISOString$1
			    );
			    proto$2.lang = lang;

			    // FORMATTING

			    addFormatToken('X', 0, 0, 'unix');
			    addFormatToken('x', 0, 0, 'valueOf');

			    // PARSING

			    addRegexToken('x', matchSigned);
			    addRegexToken('X', matchTimestamp);
			    addParseToken('X', function (input, array, config) {
			        config._d = new Date(parseFloat(input) * 1000);
			    });
			    addParseToken('x', function (input, array, config) {
			        config._d = new Date(toInt(input));
			    });

			    //! moment.js

			    hooks.version = '2.26.0';

			    setHookCallback(createLocal);

			    hooks.fn = proto;
			    hooks.min = min;
			    hooks.max = max;
			    hooks.now = now;
			    hooks.utc = createUTC;
			    hooks.unix = createUnix;
			    hooks.months = listMonths;
			    hooks.isDate = isDate;
			    hooks.locale = getSetGlobalLocale;
			    hooks.invalid = createInvalid;
			    hooks.duration = createDuration;
			    hooks.isMoment = isMoment;
			    hooks.weekdays = listWeekdays;
			    hooks.parseZone = createInZone;
			    hooks.localeData = getLocale;
			    hooks.isDuration = isDuration;
			    hooks.monthsShort = listMonthsShort;
			    hooks.weekdaysMin = listWeekdaysMin;
			    hooks.defineLocale = defineLocale;
			    hooks.updateLocale = updateLocale;
			    hooks.locales = listLocales;
			    hooks.weekdaysShort = listWeekdaysShort;
			    hooks.normalizeUnits = normalizeUnits;
			    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
			    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
			    hooks.calendarFormat = getCalendarFormat;
			    hooks.prototype = proto;

			    // currently HTML5 input type only supports 24-hour formats
			    hooks.HTML5_FMT = {
			        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
			        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
			        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
			        DATE: 'YYYY-MM-DD', // <input type="date" />
			        TIME: 'HH:mm', // <input type="time" />
			        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
			        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
			        WEEK: 'GGGG-[W]WW', // <input type="week" />
			        MONTH: 'YYYY-MM', // <input type="month" />
			    };

			    return hooks;

			})));
			});

			class TeachingTeam {
			  constructor(name, type) {
			    this.name = name;
			    this.type = type;
			    this.teachingPeriods = [];
			  }

			  isAvailableInBetween(startDate, endDate) {
			    const startDateDoesntFallWithinExistingTeachingPeriods = this.teachingPeriods.every(
			      (period) => {
			        return !moment(startDate).isBetween(
			          period.from,
			          period.to,
			          undefined,
			          "[]"
			        );
			      }
			    );
			    const endDateDoesntFallWithinExistingTeachingPeriods = this.teachingPeriods.every(
			      (period) => {
			        return !moment(endDate).isBetween(
			          period.from,
			          period.to,
			          undefined,
			          "[]"
			        );
			      }
			    );
			    return (
			      startDateDoesntFallWithinExistingTeachingPeriods &&
			      endDateDoesntFallWithinExistingTeachingPeriods
			    );
			  }

			  addTeachingPeriod(startDate, endDate, cohort) {
			    this.teachingPeriods.push({ from: startDate, to: endDate, cohort });
			  }

			  setColour(colour) {
			    this.colour = colour;
			  }

			  toString() {
			      console.log(`--- ${this.name} ---`);
			      this.teachingPeriods.forEach(period => {
			          const startDate = period.from.format("dddd, MMMM Do YYYY");
			          const endDate = period.to.format("dddd, MMMM Do YYYY");
			          console.log(`${startDate} - ${endDate} teaching ${period.cohort.name}`);
			      });
			  }
			}

			const SECTION = {
			  CORE: "CORE",
			  BACKEND: "BACKEND",
			  FRONTEND: "FRONTEND",
			};

			class Cohort {
			  constructor({ name, weeklyPattern, classStructure }) {
			    this.name = name;
			    this.weeklyPattern = weeklyPattern;
			    this.classStructure = classStructure;
			    this.teachingWeeks = [];
			  }

			  toString() {
			    let out = [];

			    const cohortName = this.teachingWeeks[0].firstTeachingDay.format("MMMM YYYY");
			    out.push(`COHORT: ${cohortName}\n`);
			    out.push(`------ CALENDAR ----`);
			    
			    let weekCount = 0;
			    this.teachingWeeks.forEach((week) => {
			      if (week.isHolidayWeek) {
			        const firstClass = week.firstTeachingDay.format("dddd, MMMM Do YYYY");
			        const secondClass = week.secondTeachingDay.format("dddd, MMMM Do YYYY");
			        out.push(`${week.section}: HOLIDAY: ${firstClass}`);
			        out.push(`${week.section}: HOLIDAY: ${secondClass}`); 
			      } else if (week.isBreakWeek){
			        const firstClass = week.firstTeachingDay.format("dddd, MMMM Do YYYY");
			        const secondClass = week.secondTeachingDay.format("dddd, MMMM Do YYYY");
			        out.push(`${week.section}: STUDY BREAK: ${firstClass}`);
			        out.push(`${week.section}: STUDY BREAK: ${secondClass}`);  
			      } else {
			        weekCount++;
			        const firstClass = week.firstTeachingDay.format("dddd, MMMM Do YYYY");
			        const secondClass = week.secondTeachingDay.format("dddd, MMMM Do YYYY");
			        out.push(`${week.section}: W${weekCount}L1: ${firstClass}`);
			        out.push(`${week.section}: W${weekCount}L2: ${secondClass}`);
			      }
			    });
			    out.push("");
			    const coreWeeks = this.getCoreWeeks();
			    const coreStart = coreWeeks[0].firstTeachingDay.format("dddd, MMMM Do YYYY");
			    const coreEnd = coreWeeks[coreWeeks.length - 1].secondTeachingDay.format("dddd, MMMM Do YYYY");
			    const backendWeeks = this.getBackendWeeks();
			    const backendStart = backendWeeks[1].firstTeachingDay.format("dddd, MMMM Do YYYY");
			    const backendEnd = backendWeeks[backendWeeks.length - 1].secondTeachingDay.format("dddd, MMMM Do YYYY");
			    const frontendWeeks = this.getFrontendWeeks();
			    const frontendStart = frontendWeeks[1].firstTeachingDay.format("dddd, MMMM Do YYYY");
			    const frontendEnd = frontendWeeks[frontendWeeks.length - 1].secondTeachingDay.format("dddd, MMMM Do YYYY");
			    out.push(`${cohortName} - CORE: ${coreStart} - ${coreEnd}`);
			    out.push(`${cohortName} - BACKEND: ${backendStart} - ${backendEnd}`);
			    out.push(`${cohortName} - FRONTEND: ${frontendStart} - ${frontendEnd}`);
			    return out.join("\n");
			  }

			  setColour(colour) {
			    this.colour = colour;
			  }

			  get startDate() {
			    return this.teachingWeeks[0].firstTeachingDay;
			  }

			  get endDate() {
			    return this.teachingWeeks[this.teachingWeeks.length - 1].secondTeachingDay;
			  }

			  getCoreWeeks() {
			    return this.teachingWeeks.filter(w => w.section === SECTION.CORE);
			  }

			  getBackendWeeks() {
			    return this.teachingWeeks.filter(w => w.section === SECTION.BACKEND);
			  }

			  getFrontendWeeks() {
			    return this.teachingWeeks.filter(w => w.section === SECTION.FRONTEND);
			  }
			}

			const generateRandomColor = (numOfSteps, step) => {
			  // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
			  // Adam Cole, 2011-Sept-14
			  // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
			  var r, g, b;
			  var h = step / numOfSteps;
			  var i = ~~(h * 6);
			  var f = h * 6 - i;
			  var q = 1 - f;
			  switch (i % 6) {
			    case 0:
			      r = 1;
			      g = f;
			      b = 0;
			      break;
			    case 1:
			      r = q;
			      g = 1;
			      b = 0;
			      break;
			    case 2:
			      r = 0;
			      g = 1;
			      b = f;
			      break;
			    case 3:
			      r = 0;
			      g = q;
			      b = 1;
			      break;
			    case 4:
			      r = f;
			      g = 0;
			      b = 1;
			      break;
			    case 5:
			      r = 1;
			      g = 0;
			      b = q;
			      break;
			  }
			  var c =
			    "#" +
			    ("00" + (~~(r * 255)).toString(16)).slice(-2) +
			    ("00" + (~~(g * 255)).toString(16)).slice(-2) +
			    ("00" + (~~(b * 255)).toString(16)).slice(-2);
			  return c;
			};

			const NUMBER_OF_WEEKS_IN_A_YEAR = 52;
			// 0 Sunday
			// 1 Monday
			// 2 Tuesday
			// 3 Wednesday
			// 4 Thursday
			// 5 Friday
			// 6 Saturday
			const COHORT_PATTERNS = {
			  mondayAndWednesday: [1, 3],
			  tuesdayAndThursday: [2, 4],
			};

			const getXmas = (currentDate) => {
			  const xmas = moment(currentDate);
			  xmas.set("month", 11);
			  xmas.set("date", 25);
			  return xmas;
			};

			const getNewYears = (currentDate) => {
			  const newYears = moment(currentDate);
			  newYears.set("month", 0);
			  newYears.set("date", 1);
			  return newYears;
			};

			const isItHolidayWeek = (simulationCurrentDate) => {
			  const firstDayOfWeek = moment(simulationCurrentDate).weekday(0);
			  const lastDayOfWeek = moment(simulationCurrentDate).weekday(6);
			  const xmas = getXmas(lastDayOfWeek);
			  const newYears = getNewYears(lastDayOfWeek);

			  const isHolidayWeek =
			    xmas.isBetween(firstDayOfWeek, lastDayOfWeek, undefined, "[]") ||
			    newYears.isBetween(firstDayOfWeek, lastDayOfWeek, undefined, "[]");
			  return isHolidayWeek;
			};

			const getFirstDayOfWeekOption = (dayOfWeek) => {
			  if (dayOfWeek === "monday") {
			    return COHORT_PATTERNS.mondayAndWednesday;
			  }
			  return COHORT_PATTERNS.tuesdayAndThursday;
			};

			const getSecondDayOfWeekOption = (dayOfWeek) => {
			  if (dayOfWeek === "monday") {
			    return COHORT_PATTERNS.tuesdayAndThursday;
			  }
			  return COHORT_PATTERNS.mondayAndWednesday;
			};

			class Simulation {
			  constructor({
			    cohortStartFrequency,
			    simulationStartDate,
			    coreTeamCount,
			    backendTeamCount,
			    frontendTeamCount,
			    classStructure,
			    simulationYears,
			    breakWeek1,
			    breakWeek2,
			    dayOfWeek,
			  }) {
			    this.cohortStartFrequency = cohortStartFrequency;
			    this.simulationStartDate = simulationStartDate;
			    this.coreTeamCount = coreTeamCount;
			    this.backendTeamCount = backendTeamCount;
			    this.frontendTeamCount = frontendTeamCount;
			    this.classStructure = classStructure;
			    this.simulationYears = simulationYears;
			    this.breakWeek1 = breakWeek1;
			    this.breakWeek2 = breakWeek2;
			    this.dayOfWeek = dayOfWeek;
			    this.totalCourseLength = classStructure.reduce(
			      (acc, cur) => acc + Number(cur.weeks),
			      0
			    );
			    this.teachingTeams = [];
			    this.generateTeachingTeams();
			    this.cohorts = [];
			    this.generateTeachingCalendar();
			    this.allocateTeachingStaff();
			    this.assignCohortColours();
			    this.assignTeachingTeamColours();
			  }

			  generateTeachingTeams() {
			    for (let i = 0; i < this.coreTeamCount; i++) {
			      this.teachingTeams.push(
			        new TeachingTeam(`Core Team #${i + 1}`, SECTION.CORE)
			      );
			    }

			    for (let i = 0; i < this.backendTeamCount; i++) {
			      this.teachingTeams.push(
			        new TeachingTeam(`Backend Team #${i + 1}`, SECTION.BACKEND)
			      );
			    }

			    for (let i = 0; i < this.frontendTeamCount; i++) {
			      this.teachingTeams.push(
			        new TeachingTeam(`Frontend Team #${i + 1}`, SECTION.FRONTEND)
			      );
			    }
			  }

			  assignTeachingTeamColours() {
			    this.teachingTeams.forEach((team, index) => {
			      team.colour = generateRandomColor(this.teachingTeams.length, index);
			    });
			  }

			  /* initializes cohorts and teaching weeks */
			  generateTeachingCalendar() {
			    let simulationCurrentDate = moment(this.simulationStartDate);
			    const numberOfWeeks = this.simulationYears * NUMBER_OF_WEEKS_IN_A_YEAR;
			    for (let week = 0; week < numberOfWeeks; week++) {
			      if (week === 0 || week % this.cohortStartFrequency === 0) {
			        // generate a new cohort at the beginning of the simulation
			        // and every nth week
			        // alternate between weekly schedule Mon-Wed, Tue-Thur
			        let cohortPattern =
			          this.cohorts.length % 2 === 0
			            ? getFirstDayOfWeekOption(this.dayOfWeek)
			            : getSecondDayOfWeekOption(this.dayOfWeek);
			        this.cohorts.push(
			          new Cohort({
			            name: `Cohort #${this.cohorts.length + 1}`,
			            weeklyPattern: cohortPattern,
			            classStructure: this.classStructure,
			          })
			        );
			      }

			      for (let i = 0; i < this.cohorts.length; i++) {
			        const cohort = this.cohorts[i];
			        const teachingWeeksAllocated = cohort.teachingWeeks.filter(
			          (w) => w.isHolidayWeek === false && w.isBreakWeek === false
			        ).length;
			        let section;
			        let isBreakWeek = false;
			        if (teachingWeeksAllocated < this.classStructure[0].weeks) {
			          section = SECTION.CORE;
			        } else if (
			          teachingWeeksAllocated >= this.classStructure[0].weeks &&
			          teachingWeeksAllocated <
			            this.classStructure[0].weeks + this.classStructure[1].weeks
			        ) {
			          section = SECTION.BACKEND;
			          isBreakWeek =
			            teachingWeeksAllocated === this.classStructure[0].weeks &&
			            this.breakWeek1 &&
			            !cohort.teachingWeeks[cohort.teachingWeeks.length - 1].isBreakWeek;
			        } else {
			          isBreakWeek =
			            teachingWeeksAllocated ===
			              this.classStructure[0].weeks + this.classStructure[1].weeks &&
			            this.breakWeek2 &&
			            !cohort.teachingWeeks[cohort.teachingWeeks.length - 1].isBreakWeek;
			          section = SECTION.FRONTEND;
			        }
			        if (teachingWeeksAllocated < this.totalCourseLength) {
			          const firstTeachingDay = moment(simulationCurrentDate).day(
			            cohort.weeklyPattern[0]
			          );
			          const secondTeachingDay = moment(simulationCurrentDate).day(
			            cohort.weeklyPattern[1]
			          );
			          const isHolidayWeek = isItHolidayWeek(simulationCurrentDate);

			          cohort.teachingWeeks.push({
			            firstTeachingDay,
			            secondTeachingDay,
			            teachingTeam: null,
			            isHolidayWeek,
			            isBreakWeek,
			            section,
			          });
			        }
			      }
			      simulationCurrentDate.add(7, "d");
			    }
			  }

			  findAvailableTeachingTeamByType(type, startDate, endDate) {
			    const availableTeams = this.teachingTeams
			      .filter((t) => t.type === type)
			      .filter((t) => t.isAvailableInBetween(startDate, endDate));

			    if (!availableTeams.length) {
			      const error = `No free ${type} team available. Add new team and re-compute.`;
			      alert(error);
			      throw new Error(error);
			    }

			    // from the list of available teams
			    // choose the team  with the least amount of cohorts assigned so far
			    const teamsSortedByAssignedCohorts = availableTeams.sort(function (a, b) {
			      return a.teachingPeriods.length - b.teachingPeriods.length;
			    });
			    const availableTeam = teamsSortedByAssignedCohorts[0];
			    return availableTeam;
			  }

			  assignCohortColours() {
			    this.cohorts.forEach((cohort, index) => {
			      cohort.colour = generateRandomColor(this.cohorts.length, index);
			    });
			  }

			  allocateTeachingStaff() {
			    for (let i = 0; i < this.cohorts.length; i++) {
			      const cohort = this.cohorts[i];
			      // allocate core weeks teaching team
			      const coreWeeks = cohort.getCoreWeeks();
			      if (!coreWeeks.length) {
			        // cut off
			        continue;
			      }
			      const coreStartDate = coreWeeks[0].firstTeachingDay;
			      const coreEndDate = coreWeeks[coreWeeks.length - 1].secondTeachingDay;
			      const coreTeachingTeam = this.findAvailableTeachingTeamByType(
			        SECTION.CORE,
			        coreStartDate,
			        coreEndDate
			      );
			      coreWeeks.forEach((week) => {
			        week.teachingTeam = coreTeachingTeam;
			      });
			      coreTeachingTeam.addTeachingPeriod(coreStartDate, coreEndDate, cohort);

			      // allocate backend weeks teaching team
			      const backendWeeks = cohort.getBackendWeeks();
			      if (!backendWeeks.length) {
			        // cut off
			        continue;
			      }
			      const backendStartDate = backendWeeks[0].firstTeachingDay;
			      const backendEndDate =
			        backendWeeks[backendWeeks.length - 1].secondTeachingDay;
			      const backendTeachingTeam = this.findAvailableTeachingTeamByType(
			        SECTION.BACKEND,
			        backendStartDate,
			        backendEndDate
			      );
			      backendWeeks.forEach((week) => {
			        week.teachingTeam = backendTeachingTeam;
			      });
			      backendTeachingTeam.addTeachingPeriod(
			        backendStartDate,
			        backendEndDate,
			        cohort
			      );

			      // allocate frontend weeks teaching team
			      const frontendWeeks = cohort.getFrontendWeeks();
			      if (!frontendWeeks.length) {
			        // cut off
			        continue;
			      }
			      const frontendStartDate = frontendWeeks[0].firstTeachingDay;
			      const frontendEndDate =
			        frontendWeeks[frontendWeeks.length - 1].secondTeachingDay;
			      const frontendTeachingTeam = this.findAvailableTeachingTeamByType(
			        SECTION.FRONTEND,
			        frontendStartDate,
			        frontendEndDate
			      );
			      frontendWeeks.forEach((week) => {
			        week.teachingTeam = frontendTeachingTeam;
			      });
			      frontendTeachingTeam.addTeachingPeriod(
			        frontendStartDate,
			        frontendEndDate,
			        cohort
			      );
			    }
			  }

			  displayTeachingStaffSummary() {
			    console.log(`Teaching Summary`);
			    this.teachingTeams.forEach((t) => {
			      console.log(t.toString());
			    });
			  }
			}

			class SummaryController {
			  constructor(simulation) {
			    this.simulation = simulation;
			    this.render();
			  }

			  render() {
			    let cohortSummary = $("#cohort-summary");
			    let totalCohorts = $("#total-cohorts");
			    totalCohorts.text(this.simulation.cohorts.length);
			    let teachingSummary = $("#teaching-summary");
			    cohortSummary.empty();
			    teachingSummary.empty();

			    this.simulation.cohorts.forEach((cohort) => {
			      const name = cohort.name;
			      const startDate = cohort.startDate.format("dddd, MMMM Do YYYY");
			      const endDate = cohort.endDate.format("dddd, MMMM Do YYYY");
			      const weeks = cohort.teachingWeeks.length;
			      const teams = Array.from(
			        new Set(cohort.teachingWeeks.map((w) => w.teachingTeam.name))
			      ).join("<br/>");
			      cohortSummary.append(`
                <tr>
                    <td><span style="color:${cohort.colour}">█</span> ${name}</td>
                    <td>${startDate}</td>
                    <td>${endDate}</td>
                    <td>${weeks}</td>
                    <td>${teams}</td>
                </tr>
       `);
			    });

			    this.simulation.teachingTeams.forEach((team) => {
			        const name = team.name;
			        const cohortsCount = team.teachingPeriods.length;
			        let totalCohortInBetweenFreeDays = 0;
			        let totalTeachingDays = 0;
			        for (let i = 0; i < team.teachingPeriods.length; i++) {
			            const currentTeachingPeriodStartDate = team.teachingPeriods[i].from;
			            const currentTeachingPeriodEndDate = team.teachingPeriods[i].to;
			            let daysSincePreviousTeachingEndDate = 0;
			            if(i > 0) {
			                const previousTeachingPeriodEndDate = team.teachingPeriods[i - 1].to;    
			                daysSincePreviousTeachingEndDate = currentTeachingPeriodStartDate.diff(previousTeachingPeriodEndDate, 'day');
			            }
			            
			            const numberOfDaysTaught = currentTeachingPeriodEndDate.diff(currentTeachingPeriodStartDate, 'day');
			            totalTeachingDays += numberOfDaysTaught;
			            totalCohortInBetweenFreeDays += daysSincePreviousTeachingEndDate;
			        }
			        const avgFreeDaysInBetweenCohorts = Math.round(totalCohortInBetweenFreeDays / team.teachingPeriods.length);
			        const totalTeachingWeeks = Math.round(totalTeachingDays / 7);
			        
			        teachingSummary.append(`
                  <tr>
                      <td><span style="color:${team.colour}">█</span> ${name}</td>
                      <td>${totalTeachingWeeks}</td>
                      <td>${cohortsCount}</td>
                      <td>${avgFreeDaysInBetweenCohorts}</td>
                  </tr>
         `);
			      });
			  }
			}

			/*!
			FullCalendar Core Package v4.4.0
			Docs & License: https://fullcalendar.io/
			(c) 2019 Adam Shaw
			*/

			// Creating
			// ----------------------------------------------------------------------------------------------------------------
			var elementPropHash = {
			    className: true,
			    colSpan: true,
			    rowSpan: true
			};
			var containerTagHash = {
			    '<tr': 'tbody',
			    '<td': 'tr'
			};
			function createElement(tagName, attrs, content) {
			    var el = document.createElement(tagName);
			    if (attrs) {
			        for (var attrName in attrs) {
			            if (attrName === 'style') {
			                applyStyle(el, attrs[attrName]);
			            }
			            else if (elementPropHash[attrName]) {
			                el[attrName] = attrs[attrName];
			            }
			            else {
			                el.setAttribute(attrName, attrs[attrName]);
			            }
			        }
			    }
			    if (typeof content === 'string') {
			        el.innerHTML = content; // shortcut. no need to process HTML in any way
			    }
			    else if (content != null) {
			        appendToElement(el, content);
			    }
			    return el;
			}
			function htmlToElement(html) {
			    html = html.trim();
			    var container = document.createElement(computeContainerTag(html));
			    container.innerHTML = html;
			    return container.firstChild;
			}
			function htmlToElements(html) {
			    return Array.prototype.slice.call(htmlToNodeList(html));
			}
			function htmlToNodeList(html) {
			    html = html.trim();
			    var container = document.createElement(computeContainerTag(html));
			    container.innerHTML = html;
			    return container.childNodes;
			}
			// assumes html already trimmed and tag names are lowercase
			function computeContainerTag(html) {
			    return containerTagHash[html.substr(0, 3) // faster than using regex
			    ] || 'div';
			}
			function appendToElement(el, content) {
			    var childNodes = normalizeContent(content);
			    for (var i = 0; i < childNodes.length; i++) {
			        el.appendChild(childNodes[i]);
			    }
			}
			function prependToElement(parent, content) {
			    var newEls = normalizeContent(content);
			    var afterEl = parent.firstChild || null; // if no firstChild, will append to end, but that's okay, b/c there were no children
			    for (var i = 0; i < newEls.length; i++) {
			        parent.insertBefore(newEls[i], afterEl);
			    }
			}
			function insertAfterElement(refEl, content) {
			    var newEls = normalizeContent(content);
			    var afterEl = refEl.nextSibling || null;
			    for (var i = 0; i < newEls.length; i++) {
			        refEl.parentNode.insertBefore(newEls[i], afterEl);
			    }
			}
			function normalizeContent(content) {
			    var els;
			    if (typeof content === 'string') {
			        els = htmlToElements(content);
			    }
			    else if (content instanceof Node) {
			        els = [content];
			    }
			    else { // Node[] or NodeList
			        els = Array.prototype.slice.call(content);
			    }
			    return els;
			}
			function removeElement(el) {
			    if (el.parentNode) {
			        el.parentNode.removeChild(el);
			    }
			}
			// Querying
			// ----------------------------------------------------------------------------------------------------------------
			// from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
			var matchesMethod = Element.prototype.matches ||
			    Element.prototype.matchesSelector ||
			    Element.prototype.msMatchesSelector;
			var closestMethod = Element.prototype.closest || function (selector) {
			    // polyfill
			    var el = this;
			    if (!document.documentElement.contains(el)) {
			        return null;
			    }
			    do {
			        if (elementMatches(el, selector)) {
			            return el;
			        }
			        el = el.parentElement || el.parentNode;
			    } while (el !== null && el.nodeType === 1);
			    return null;
			};
			function elementClosest(el, selector) {
			    return closestMethod.call(el, selector);
			}
			function elementMatches(el, selector) {
			    return matchesMethod.call(el, selector);
			}
			// accepts multiple subject els
			// returns a real array. good for methods like forEach
			function findElements(container, selector) {
			    var containers = container instanceof HTMLElement ? [container] : container;
			    var allMatches = [];
			    for (var i = 0; i < containers.length; i++) {
			        var matches = containers[i].querySelectorAll(selector);
			        for (var j = 0; j < matches.length; j++) {
			            allMatches.push(matches[j]);
			        }
			    }
			    return allMatches;
			}
			// accepts multiple subject els
			// only queries direct child elements
			function findChildren(parent, selector) {
			    var parents = parent instanceof HTMLElement ? [parent] : parent;
			    var allMatches = [];
			    for (var i = 0; i < parents.length; i++) {
			        var childNodes = parents[i].children; // only ever elements
			        for (var j = 0; j < childNodes.length; j++) {
			            var childNode = childNodes[j];
			            if (!selector || elementMatches(childNode, selector)) {
			                allMatches.push(childNode);
			            }
			        }
			    }
			    return allMatches;
			}
			// Style
			// ----------------------------------------------------------------------------------------------------------------
			var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
			function applyStyle(el, props) {
			    for (var propName in props) {
			        applyStyleProp(el, propName, props[propName]);
			    }
			}
			function applyStyleProp(el, name, val) {
			    if (val == null) {
			        el.style[name] = '';
			    }
			    else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
			        el.style[name] = val + 'px';
			    }
			    else {
			        el.style[name] = val;
			    }
			}
			// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
			function intersectRects(rect1, rect2) {
			    var res = {
			        left: Math.max(rect1.left, rect2.left),
			        right: Math.min(rect1.right, rect2.right),
			        top: Math.max(rect1.top, rect2.top),
			        bottom: Math.min(rect1.bottom, rect2.bottom)
			    };
			    if (res.left < res.right && res.top < res.bottom) {
			        return res;
			    }
			    return false;
			}

			// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side
			var isRtlScrollbarOnLeft = null;
			function getIsRtlScrollbarOnLeft() {
			    if (isRtlScrollbarOnLeft === null) {
			        isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
			    }
			    return isRtlScrollbarOnLeft;
			}
			function computeIsRtlScrollbarOnLeft() {
			    var outerEl = createElement('div', {
			        style: {
			            position: 'absolute',
			            top: -1000,
			            left: 0,
			            border: 0,
			            padding: 0,
			            overflow: 'scroll',
			            direction: 'rtl'
			        }
			    }, '<div></div>');
			    document.body.appendChild(outerEl);
			    var innerEl = outerEl.firstChild;
			    var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
			    removeElement(outerEl);
			    return res;
			}
			// The scrollbar width computations in computeEdges are sometimes flawed when it comes to
			// retina displays, rounding, and IE11. Massage them into a usable value.
			function sanitizeScrollbarWidth(width) {
			    width = Math.max(0, width); // no negatives
			    width = Math.round(width);
			    return width;
			}

			function computeEdges(el, getPadding) {
			    if (getPadding === void 0) { getPadding = false; }
			    var computedStyle = window.getComputedStyle(el);
			    var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
			    var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
			    var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
			    var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
			    // must use offset(Width|Height) because compatible with client(Width|Height)
			    var scrollbarLeftRight = sanitizeScrollbarWidth(el.offsetWidth - el.clientWidth - borderLeft - borderRight);
			    var scrollbarBottom = sanitizeScrollbarWidth(el.offsetHeight - el.clientHeight - borderTop - borderBottom);
			    var res = {
			        borderLeft: borderLeft,
			        borderRight: borderRight,
			        borderTop: borderTop,
			        borderBottom: borderBottom,
			        scrollbarBottom: scrollbarBottom,
			        scrollbarLeft: 0,
			        scrollbarRight: 0
			    };
			    if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
			        res.scrollbarLeft = scrollbarLeftRight;
			    }
			    else {
			        res.scrollbarRight = scrollbarLeftRight;
			    }
			    if (getPadding) {
			        res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
			        res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
			        res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
			        res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
			    }
			    return res;
			}
			function computeInnerRect(el, goWithinPadding) {
			    if (goWithinPadding === void 0) { goWithinPadding = false; }
			    var outerRect = computeRect(el);
			    var edges = computeEdges(el, goWithinPadding);
			    var res = {
			        left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
			        right: outerRect.right - edges.borderRight - edges.scrollbarRight,
			        top: outerRect.top + edges.borderTop,
			        bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
			    };
			    if (goWithinPadding) {
			        res.left += edges.paddingLeft;
			        res.right -= edges.paddingRight;
			        res.top += edges.paddingTop;
			        res.bottom -= edges.paddingBottom;
			    }
			    return res;
			}
			function computeRect(el) {
			    var rect = el.getBoundingClientRect();
			    return {
			        left: rect.left + window.pageXOffset,
			        top: rect.top + window.pageYOffset,
			        right: rect.right + window.pageXOffset,
			        bottom: rect.bottom + window.pageYOffset
			    };
			}
			function computeViewportRect() {
			    return {
			        left: window.pageXOffset,
			        right: window.pageXOffset + document.documentElement.clientWidth,
			        top: window.pageYOffset,
			        bottom: window.pageYOffset + document.documentElement.clientHeight
			    };
			}
			function computeHeightAndMargins(el) {
			    return el.getBoundingClientRect().height + computeVMargins(el);
			}
			function computeVMargins(el) {
			    var computed = window.getComputedStyle(el);
			    return parseInt(computed.marginTop, 10) +
			        parseInt(computed.marginBottom, 10);
			}
			// does not return window
			function getClippingParents(el) {
			    var parents = [];
			    while (el instanceof HTMLElement) { // will stop when gets to document or null
			        var computedStyle = window.getComputedStyle(el);
			        if (computedStyle.position === 'fixed') {
			            break;
			        }
			        if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
			            parents.push(el);
			        }
			        el = el.parentNode;
			    }
			    return parents;
			}
			function computeClippingRect(el) {
			    return getClippingParents(el)
			        .map(function (el) {
			        return computeInnerRect(el);
			    })
			        .concat(computeViewportRect())
			        .reduce(function (rect0, rect1) {
			        return intersectRects(rect0, rect1) || rect1; // should always intersect
			    });
			}
			// Event Delegation
			// ----------------------------------------------------------------------------------------------------------------
			function listenBySelector(container, eventType, selector, handler) {
			    function realHandler(ev) {
			        var matchedChild = elementClosest(ev.target, selector);
			        if (matchedChild) {
			            handler.call(matchedChild, ev, matchedChild);
			        }
			    }
			    container.addEventListener(eventType, realHandler);
			    return function () {
			        container.removeEventListener(eventType, realHandler);
			    };
			}
			function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
			    var currentMatchedChild;
			    return listenBySelector(container, 'mouseover', selector, function (ev, matchedChild) {
			        if (matchedChild !== currentMatchedChild) {
			            currentMatchedChild = matchedChild;
			            onMouseEnter(ev, matchedChild);
			            var realOnMouseLeave_1 = function (ev) {
			                currentMatchedChild = null;
			                onMouseLeave(ev, matchedChild);
			                matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
			            };
			            // listen to the next mouseleave, and then unattach
			            matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
			        }
			    });
			}

			var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
			// Adding
			function addWeeks(m, n) {
			    var a = dateToUtcArray(m);
			    a[2] += n * 7;
			    return arrayToUtcDate(a);
			}
			function addDays(m, n) {
			    var a = dateToUtcArray(m);
			    a[2] += n;
			    return arrayToUtcDate(a);
			}
			function addMs(m, n) {
			    var a = dateToUtcArray(m);
			    a[6] += n;
			    return arrayToUtcDate(a);
			}
			// Diffing (all return floats)
			function diffWeeks(m0, m1) {
			    return diffDays(m0, m1) / 7;
			}
			function diffDays(m0, m1) {
			    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
			}
			function diffHours(m0, m1) {
			    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
			}
			function diffMinutes(m0, m1) {
			    return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
			}
			function diffSeconds(m0, m1) {
			    return (m1.valueOf() - m0.valueOf()) / 1000;
			}
			function diffDayAndTime(m0, m1) {
			    var m0day = startOfDay(m0);
			    var m1day = startOfDay(m1);
			    return {
			        years: 0,
			        months: 0,
			        days: Math.round(diffDays(m0day, m1day)),
			        milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf())
			    };
			}
			// Diffing Whole Units
			function diffWholeWeeks(m0, m1) {
			    var d = diffWholeDays(m0, m1);
			    if (d !== null && d % 7 === 0) {
			        return d / 7;
			    }
			    return null;
			}
			function diffWholeDays(m0, m1) {
			    if (timeAsMs(m0) === timeAsMs(m1)) {
			        return Math.round(diffDays(m0, m1));
			    }
			    return null;
			}
			// Start-Of
			function startOfDay(m) {
			    return arrayToUtcDate([
			        m.getUTCFullYear(),
			        m.getUTCMonth(),
			        m.getUTCDate()
			    ]);
			}
			function startOfHour(m) {
			    return arrayToUtcDate([
			        m.getUTCFullYear(),
			        m.getUTCMonth(),
			        m.getUTCDate(),
			        m.getUTCHours()
			    ]);
			}
			function startOfMinute(m) {
			    return arrayToUtcDate([
			        m.getUTCFullYear(),
			        m.getUTCMonth(),
			        m.getUTCDate(),
			        m.getUTCHours(),
			        m.getUTCMinutes()
			    ]);
			}
			function startOfSecond(m) {
			    return arrayToUtcDate([
			        m.getUTCFullYear(),
			        m.getUTCMonth(),
			        m.getUTCDate(),
			        m.getUTCHours(),
			        m.getUTCMinutes(),
			        m.getUTCSeconds()
			    ]);
			}
			// Week Computation
			function weekOfYear(marker, dow, doy) {
			    var y = marker.getUTCFullYear();
			    var w = weekOfGivenYear(marker, y, dow, doy);
			    if (w < 1) {
			        return weekOfGivenYear(marker, y - 1, dow, doy);
			    }
			    var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
			    if (nextW >= 1) {
			        return Math.min(w, nextW);
			    }
			    return w;
			}
			function weekOfGivenYear(marker, year, dow, doy) {
			    var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
			    var dayStart = startOfDay(marker);
			    var days = Math.round(diffDays(firstWeekStart, dayStart));
			    return Math.floor(days / 7) + 1; // zero-indexed
			}
			// start-of-first-week - start-of-year
			function firstWeekOffset(year, dow, doy) {
			    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
			    var fwd = 7 + dow - doy;
			    // first-week day local weekday -- which local weekday is fwd
			    var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
			    return -fwdlw + fwd - 1;
			}
			// Array Conversion
			function dateToLocalArray(date) {
			    return [
			        date.getFullYear(),
			        date.getMonth(),
			        date.getDate(),
			        date.getHours(),
			        date.getMinutes(),
			        date.getSeconds(),
			        date.getMilliseconds()
			    ];
			}
			function arrayToLocalDate(a) {
			    return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
			    a[3] || 0, a[4] || 0, a[5] || 0);
			}
			function dateToUtcArray(date) {
			    return [
			        date.getUTCFullYear(),
			        date.getUTCMonth(),
			        date.getUTCDate(),
			        date.getUTCHours(),
			        date.getUTCMinutes(),
			        date.getUTCSeconds(),
			        date.getUTCMilliseconds()
			    ];
			}
			function arrayToUtcDate(a) {
			    // according to web standards (and Safari), a month index is required.
			    // massage if only given a year.
			    if (a.length === 1) {
			        a = a.concat([0]);
			    }
			    return new Date(Date.UTC.apply(Date, a));
			}
			// Other Utils
			function isValidDate(m) {
			    return !isNaN(m.valueOf());
			}
			function timeAsMs(m) {
			    return m.getUTCHours() * 1000 * 60 * 60 +
			        m.getUTCMinutes() * 1000 * 60 +
			        m.getUTCSeconds() * 1000 +
			        m.getUTCMilliseconds();
			}
			var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
			// Parsing and Creation
			function createDuration(input, unit) {
			    var _a;
			    if (typeof input === 'string') {
			        return parseString(input);
			    }
			    else if (typeof input === 'object' && input) { // non-null object
			        return normalizeObject(input);
			    }
			    else if (typeof input === 'number') {
			        return normalizeObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
			    }
			    else {
			        return null;
			    }
			}
			function parseString(s) {
			    var m = PARSE_RE.exec(s);
			    if (m) {
			        var sign = m[1] ? -1 : 1;
			        return {
			            years: 0,
			            months: 0,
			            days: sign * (m[2] ? parseInt(m[2], 10) : 0),
			            milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
			                (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
			                (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
			                (m[6] ? parseInt(m[6], 10) : 0) // ms
			            )
			        };
			    }
			    return null;
			}
			function normalizeObject(obj) {
			    return {
			        years: obj.years || obj.year || 0,
			        months: obj.months || obj.month || 0,
			        days: (obj.days || obj.day || 0) +
			            getWeeksFromInput(obj) * 7,
			        milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
			            (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
			            (obj.seconds || obj.second || 0) * 1000 + // seconds
			            (obj.milliseconds || obj.millisecond || obj.ms || 0) // ms
			    };
			}
			function getWeeksFromInput(obj) {
			    return obj.weeks || obj.week || 0;
			}
			// Equality
			function durationsEqual(d0, d1) {
			    return d0.years === d1.years &&
			        d0.months === d1.months &&
			        d0.days === d1.days &&
			        d0.milliseconds === d1.milliseconds;
			}
			function subtractDurations(d1, d0) {
			    return {
			        years: d1.years - d0.years,
			        months: d1.months - d0.months,
			        days: d1.days - d0.days,
			        milliseconds: d1.milliseconds - d0.milliseconds
			    };
			}
			// Conversions
			// "Rough" because they are based on average-case Gregorian months/years
			function asRoughYears(dur) {
			    return asRoughDays(dur) / 365;
			}
			function asRoughMonths(dur) {
			    return asRoughDays(dur) / 30;
			}
			function asRoughDays(dur) {
			    return asRoughMs(dur) / 864e5;
			}
			function asRoughMs(dur) {
			    return dur.years * (365 * 864e5) +
			        dur.months * (30 * 864e5) +
			        dur.days * 864e5 +
			        dur.milliseconds;
			}
			function greatestDurationDenominator(dur, dontReturnWeeks) {
			    var ms = dur.milliseconds;
			    if (ms) {
			        if (ms % 1000 !== 0) {
			            return { unit: 'millisecond', value: ms };
			        }
			        if (ms % (1000 * 60) !== 0) {
			            return { unit: 'second', value: ms / 1000 };
			        }
			        if (ms % (1000 * 60 * 60) !== 0) {
			            return { unit: 'minute', value: ms / (1000 * 60) };
			        }
			        if (ms) {
			            return { unit: 'hour', value: ms / (1000 * 60 * 60) };
			        }
			    }
			    if (dur.days) {
			        if (!dontReturnWeeks && dur.days % 7 === 0) {
			            return { unit: 'week', value: dur.days / 7 };
			        }
			        return { unit: 'day', value: dur.days };
			    }
			    if (dur.months) {
			        return { unit: 'month', value: dur.months };
			    }
			    if (dur.years) {
			        return { unit: 'year', value: dur.years };
			    }
			    return { unit: 'millisecond', value: 0 };
			}

			/* FullCalendar-specific DOM Utilities
			----------------------------------------------------------------------------------------------------------------------*/
			// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
			// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
			function compensateScroll(rowEl, scrollbarWidths) {
			    if (scrollbarWidths.left) {
			        applyStyle(rowEl, {
			            borderLeftWidth: 1,
			            marginLeft: scrollbarWidths.left - 1
			        });
			    }
			    if (scrollbarWidths.right) {
			        applyStyle(rowEl, {
			            borderRightWidth: 1,
			            marginRight: scrollbarWidths.right - 1
			        });
			    }
			}
			// Undoes compensateScroll and restores all borders/margins
			function uncompensateScroll(rowEl) {
			    applyStyle(rowEl, {
			        marginLeft: '',
			        marginRight: '',
			        borderLeftWidth: '',
			        borderRightWidth: ''
			    });
			}
			// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
			// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
			// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and
			// reduces the available height.
			function distributeHeight(els, availableHeight, shouldRedistribute) {
			    // *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
			    // and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.
			    var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
			    var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
			    var flexEls = []; // elements that are allowed to expand. array of DOM nodes
			    var flexOffsets = []; // amount of vertical space it takes up
			    var flexHeights = []; // actual css height
			    var usedHeight = 0;
			    undistributeHeight(els); // give all elements their natural height
			    // find elements that are below the recommended height (expandable).
			    // important to query for heights in a single first pass (to avoid reflow oscillation).
			    els.forEach(function (el, i) {
			        var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
			        var naturalHeight = el.getBoundingClientRect().height;
			        var naturalOffset = naturalHeight + computeVMargins(el);
			        if (naturalOffset < minOffset) {
			            flexEls.push(el);
			            flexOffsets.push(naturalOffset);
			            flexHeights.push(naturalHeight);
			        }
			        else {
			            // this element stretches past recommended height (non-expandable). mark the space as occupied.
			            usedHeight += naturalOffset;
			        }
			    });
			    // readjust the recommended height to only consider the height available to non-maxed-out rows.
			    if (shouldRedistribute) {
			        availableHeight -= usedHeight;
			        minOffset1 = Math.floor(availableHeight / flexEls.length);
			        minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
			    }
			    // assign heights to all expandable elements
			    flexEls.forEach(function (el, i) {
			        var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
			        var naturalOffset = flexOffsets[i];
			        var naturalHeight = flexHeights[i];
			        var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding
			        if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
			            el.style.height = newHeight + 'px';
			        }
			    });
			}
			// Undoes distrubuteHeight, restoring all els to their natural height
			function undistributeHeight(els) {
			    els.forEach(function (el) {
			        el.style.height = '';
			    });
			}
			// Given `els`, a set of <td> cells, find the cell with the largest natural width and set the widths of all the
			// cells to be that width.
			// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
			function matchCellWidths(els) {
			    var maxInnerWidth = 0;
			    els.forEach(function (el) {
			        var innerEl = el.firstChild; // hopefully an element
			        if (innerEl instanceof HTMLElement) {
			            var innerWidth_1 = innerEl.getBoundingClientRect().width;
			            if (innerWidth_1 > maxInnerWidth) {
			                maxInnerWidth = innerWidth_1;
			            }
			        }
			    });
			    maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance
			    els.forEach(function (el) {
			        el.style.width = maxInnerWidth + 'px';
			    });
			    return maxInnerWidth;
			}
			// Given one element that resides inside another,
			// Subtracts the height of the inner element from the outer element.
			function subtractInnerElHeight(outerEl, innerEl) {
			    // effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
			    var reflowStyleProps = {
			        position: 'relative',
			        left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
			    };
			    applyStyle(outerEl, reflowStyleProps);
			    applyStyle(innerEl, reflowStyleProps);
			    var diff = // grab the dimensions
			     outerEl.getBoundingClientRect().height -
			        innerEl.getBoundingClientRect().height;
			    // undo hack
			    var resetStyleProps = { position: '', left: '' };
			    applyStyle(outerEl, resetStyleProps);
			    applyStyle(innerEl, resetStyleProps);
			    return diff;
			}
			/* Object Ordering by Field
			----------------------------------------------------------------------------------------------------------------------*/
			function parseFieldSpecs(input) {
			    var specs = [];
			    var tokens = [];
			    var i;
			    var token;
			    if (typeof input === 'string') {
			        tokens = input.split(/\s*,\s*/);
			    }
			    else if (typeof input === 'function') {
			        tokens = [input];
			    }
			    else if (Array.isArray(input)) {
			        tokens = input;
			    }
			    for (i = 0; i < tokens.length; i++) {
			        token = tokens[i];
			        if (typeof token === 'string') {
			            specs.push(token.charAt(0) === '-' ?
			                { field: token.substring(1), order: -1 } :
			                { field: token, order: 1 });
			        }
			        else if (typeof token === 'function') {
			            specs.push({ func: token });
			        }
			    }
			    return specs;
			}
			function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
			    var i;
			    var cmp;
			    for (i = 0; i < fieldSpecs.length; i++) {
			        cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
			        if (cmp) {
			            return cmp;
			        }
			    }
			    return 0;
			}
			function compareByFieldSpec(obj0, obj1, fieldSpec) {
			    if (fieldSpec.func) {
			        return fieldSpec.func(obj0, obj1);
			    }
			    return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
			        * (fieldSpec.order || 1);
			}
			function flexibleCompare(a, b) {
			    if (!a && !b) {
			        return 0;
			    }
			    if (b == null) {
			        return -1;
			    }
			    if (a == null) {
			        return 1;
			    }
			    if (typeof a === 'string' || typeof b === 'string') {
			        return String(a).localeCompare(String(b));
			    }
			    return a - b;
			}
			/* String Utilities
			----------------------------------------------------------------------------------------------------------------------*/
			function capitaliseFirstLetter(str) {
			    return str.charAt(0).toUpperCase() + str.slice(1);
			}
			function padStart(val, len) {
			    var s = String(val);
			    return '000'.substr(0, len - s.length) + s;
			}
			function isInt(n) {
			    return n % 1 === 0;
			}
			/* Weird Utilities
			----------------------------------------------------------------------------------------------------------------------*/
			function applyAll(functions, thisObj, args) {
			    if (typeof functions === 'function') { // supplied a single function
			        functions = [functions];
			    }
			    if (functions) {
			        var i = void 0;
			        var ret = void 0;
			        for (i = 0; i < functions.length; i++) {
			            ret = functions[i].apply(thisObj, args) || ret;
			        }
			        return ret;
			    }
			}
			function firstDefined() {
			    var args = [];
			    for (var _i = 0; _i < arguments.length; _i++) {
			        args[_i] = arguments[_i];
			    }
			    for (var i = 0; i < args.length; i++) {
			        if (args[i] !== undefined) {
			            return args[i];
			        }
			    }
			}
			// Returns a function, that, as long as it continues to be invoked, will not
			// be triggered. The function will be called after it stops being called for
			// N milliseconds. If `immediate` is passed, trigger the function on the
			// leading edge, instead of the trailing.
			// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
			function debounce(func, wait) {
			    var timeout;
			    var args;
			    var context;
			    var timestamp;
			    var result;
			    var later = function () {
			        var last = new Date().valueOf() - timestamp;
			        if (last < wait) {
			            timeout = setTimeout(later, wait - last);
			        }
			        else {
			            timeout = null;
			            result = func.apply(context, args);
			            context = args = null;
			        }
			    };
			    return function () {
			        context = this;
			        args = arguments;
			        timestamp = new Date().valueOf();
			        if (!timeout) {
			            timeout = setTimeout(later, wait);
			        }
			        return result;
			    };
			}
			// Number and Boolean are only types that defaults or not computed for
			// TODO: write more comments
			function refineProps(rawProps, processors, defaults, leftoverProps) {
			    if (defaults === void 0) { defaults = {}; }
			    var refined = {};
			    for (var key in processors) {
			        var processor = processors[key];
			        if (rawProps[key] !== undefined) {
			            // found
			            if (processor === Function) {
			                refined[key] = typeof rawProps[key] === 'function' ? rawProps[key] : null;
			            }
			            else if (processor) { // a refining function?
			                refined[key] = processor(rawProps[key]);
			            }
			            else {
			                refined[key] = rawProps[key];
			            }
			        }
			        else if (defaults[key] !== undefined) {
			            // there's an explicit default
			            refined[key] = defaults[key];
			        }
			        else {
			            // must compute a default
			            if (processor === String) {
			                refined[key] = ''; // empty string is default for String
			            }
			            else if (!processor || processor === Number || processor === Boolean || processor === Function) {
			                refined[key] = null; // assign null for other non-custom processor funcs
			            }
			            else {
			                refined[key] = processor(null); // run the custom processor func
			            }
			        }
			    }
			    if (leftoverProps) {
			        for (var key in rawProps) {
			            if (processors[key] === undefined) {
			                leftoverProps[key] = rawProps[key];
			            }
			        }
			    }
			    return refined;
			}
			/* Date stuff that doesn't belong in datelib core
			----------------------------------------------------------------------------------------------------------------------*/
			// given a timed range, computes an all-day range that has the same exact duration,
			// but whose start time is aligned with the start of the day.
			function computeAlignedDayRange(timedRange) {
			    var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
			    var start = startOfDay(timedRange.start);
			    var end = addDays(start, dayCnt);
			    return { start: start, end: end };
			}
			// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
			// TODO: give nextDayThreshold a default arg
			function computeVisibleDayRange(timedRange, nextDayThreshold) {
			    if (nextDayThreshold === void 0) { nextDayThreshold = createDuration(0); }
			    var startDay = null;
			    var endDay = null;
			    if (timedRange.end) {
			        endDay = startOfDay(timedRange.end);
			        var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
			        // If the end time is actually inclusively part of the next day and is equal to or
			        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
			        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
			        if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
			            endDay = addDays(endDay, 1);
			        }
			    }
			    if (timedRange.start) {
			        startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
			        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
			        if (endDay && endDay <= startDay) {
			            endDay = addDays(startDay, 1);
			        }
			    }
			    return { start: startDay, end: endDay };
			}
			function diffDates(date0, date1, dateEnv, largeUnit) {
			    if (largeUnit === 'year') {
			        return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
			    }
			    else if (largeUnit === 'month') {
			        return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
			    }
			    else {
			        return diffDayAndTime(date0, date1); // returns a duration
			    }
			}

			/*! *****************************************************************************
			Copyright (c) Microsoft Corporation. All rights reserved.
			Licensed under the Apache License, Version 2.0 (the "License"); you may not use
			this file except in compliance with the License. You may obtain a copy of the
			License at http://www.apache.org/licenses/LICENSE-2.0

			THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
			KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
			WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
			MERCHANTABLITY OR NON-INFRINGEMENT.

			See the Apache Version 2.0 License for specific language governing permissions
			and limitations under the License.
			***************************************************************************** */
			/* global Reflect, Promise */

			var extendStatics = function(d, b) {
			    extendStatics = Object.setPrototypeOf ||
			        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
			    return extendStatics(d, b);
			};

			function __extends(d, b) {
			    extendStatics(d, b);
			    function __() { this.constructor = d; }
			    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			}

			var __assign = function() {
			    __assign = Object.assign || function __assign(t) {
			        for (var s, i = 1, n = arguments.length; i < n; i++) {
			            s = arguments[i];
			            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			        }
			        return t;
			    };
			    return __assign.apply(this, arguments);
			};

			function parseRecurring(eventInput, allDayDefault, dateEnv, recurringTypes, leftovers) {
			    for (var i = 0; i < recurringTypes.length; i++) {
			        var localLeftovers = {};
			        var parsed = recurringTypes[i].parse(eventInput, localLeftovers, dateEnv);
			        if (parsed) {
			            var allDay = localLeftovers.allDay;
			            delete localLeftovers.allDay; // remove from leftovers
			            if (allDay == null) {
			                allDay = allDayDefault;
			                if (allDay == null) {
			                    allDay = parsed.allDayGuess;
			                    if (allDay == null) {
			                        allDay = false;
			                    }
			                }
			            }
			            __assign(leftovers, localLeftovers);
			            return {
			                allDay: allDay,
			                duration: parsed.duration,
			                typeData: parsed.typeData,
			                typeId: i
			            };
			        }
			    }
			    return null;
			}
			/*
			Event MUST have a recurringDef
			*/
			function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
			    var typeDef = recurringTypes[eventDef.recurringDef.typeId];
			    var markers = typeDef.expand(eventDef.recurringDef.typeData, {
			        start: dateEnv.subtract(framingRange.start, duration),
			        end: framingRange.end
			    }, dateEnv);
			    // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
			    if (eventDef.allDay) {
			        markers = markers.map(startOfDay);
			    }
			    return markers;
			}

			var hasOwnProperty = Object.prototype.hasOwnProperty;
			// Merges an array of objects into a single object.
			// The second argument allows for an array of property names who's object values will be merged together.
			function mergeProps(propObjs, complexProps) {
			    var dest = {};
			    var i;
			    var name;
			    var complexObjs;
			    var j;
			    var val;
			    var props;
			    if (complexProps) {
			        for (i = 0; i < complexProps.length; i++) {
			            name = complexProps[i];
			            complexObjs = [];
			            // collect the trailing object values, stopping when a non-object is discovered
			            for (j = propObjs.length - 1; j >= 0; j--) {
			                val = propObjs[j][name];
			                if (typeof val === 'object' && val) { // non-null object
			                    complexObjs.unshift(val);
			                }
			                else if (val !== undefined) {
			                    dest[name] = val; // if there were no objects, this value will be used
			                    break;
			                }
			            }
			            // if the trailing values were objects, use the merged value
			            if (complexObjs.length) {
			                dest[name] = mergeProps(complexObjs);
			            }
			        }
			    }
			    // copy values into the destination, going from last to first
			    for (i = propObjs.length - 1; i >= 0; i--) {
			        props = propObjs[i];
			        for (name in props) {
			            if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
			                dest[name] = props[name];
			            }
			        }
			    }
			    return dest;
			}
			function filterHash(hash, func) {
			    var filtered = {};
			    for (var key in hash) {
			        if (func(hash[key], key)) {
			            filtered[key] = hash[key];
			        }
			    }
			    return filtered;
			}
			function mapHash(hash, func) {
			    var newHash = {};
			    for (var key in hash) {
			        newHash[key] = func(hash[key], key);
			    }
			    return newHash;
			}
			function arrayToHash(a) {
			    var hash = {};
			    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
			        var item = a_1[_i];
			        hash[item] = true;
			    }
			    return hash;
			}
			function hashValuesToArray(obj) {
			    var a = [];
			    for (var key in obj) {
			        a.push(obj[key]);
			    }
			    return a;
			}
			function isPropsEqual(obj0, obj1) {
			    for (var key in obj0) {
			        if (hasOwnProperty.call(obj0, key)) {
			            if (!(key in obj1)) {
			                return false;
			            }
			        }
			    }
			    for (var key in obj1) {
			        if (hasOwnProperty.call(obj1, key)) {
			            if (obj0[key] !== obj1[key]) {
			                return false;
			            }
			        }
			    }
			    return true;
			}

			function parseEvents(rawEvents, sourceId, calendar, allowOpenRange) {
			    var eventStore = createEmptyEventStore();
			    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
			        var rawEvent = rawEvents_1[_i];
			        var tuple = parseEvent(rawEvent, sourceId, calendar, allowOpenRange);
			        if (tuple) {
			            eventTupleToStore(tuple, eventStore);
			        }
			    }
			    return eventStore;
			}
			function eventTupleToStore(tuple, eventStore) {
			    if (eventStore === void 0) { eventStore = createEmptyEventStore(); }
			    eventStore.defs[tuple.def.defId] = tuple.def;
			    if (tuple.instance) {
			        eventStore.instances[tuple.instance.instanceId] = tuple.instance;
			    }
			    return eventStore;
			}
			function expandRecurring(eventStore, framingRange, calendar) {
			    var dateEnv = calendar.dateEnv;
			    var defs = eventStore.defs, instances = eventStore.instances;
			    // remove existing recurring instances
			    instances = filterHash(instances, function (instance) {
			        return !defs[instance.defId].recurringDef;
			    });
			    for (var defId in defs) {
			        var def = defs[defId];
			        if (def.recurringDef) {
			            var duration = def.recurringDef.duration;
			            if (!duration) {
			                duration = def.allDay ?
			                    calendar.defaultAllDayEventDuration :
			                    calendar.defaultTimedEventDuration;
			            }
			            var starts = expandRecurringRanges(def, duration, framingRange, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes);
			            for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
			                var start = starts_1[_i];
			                var instance = createEventInstance(defId, {
			                    start: start,
			                    end: dateEnv.add(start, duration)
			                });
			                instances[instance.instanceId] = instance;
			            }
			        }
			    }
			    return { defs: defs, instances: instances };
			}
			// retrieves events that have the same groupId as the instance specified by `instanceId`
			// or they are the same as the instance.
			// why might instanceId not be in the store? an event from another calendar?
			function getRelevantEvents(eventStore, instanceId) {
			    var instance = eventStore.instances[instanceId];
			    if (instance) {
			        var def_1 = eventStore.defs[instance.defId];
			        // get events/instances with same group
			        var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
			            return isEventDefsGrouped(def_1, lookDef);
			        });
			        // add the original
			        // TODO: wish we could use eventTupleToStore or something like it
			        newStore.defs[def_1.defId] = def_1;
			        newStore.instances[instance.instanceId] = instance;
			        return newStore;
			    }
			    return createEmptyEventStore();
			}
			function isEventDefsGrouped(def0, def1) {
			    return Boolean(def0.groupId && def0.groupId === def1.groupId);
			}
			function transformRawEvents(rawEvents, eventSource, calendar) {
			    var calEachTransform = calendar.opt('eventDataTransform');
			    var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
			    if (sourceEachTransform) {
			        rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
			    }
			    if (calEachTransform) {
			        rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
			    }
			    return rawEvents;
			}
			function transformEachRawEvent(rawEvents, func) {
			    var refinedEvents;
			    if (!func) {
			        refinedEvents = rawEvents;
			    }
			    else {
			        refinedEvents = [];
			        for (var _i = 0, rawEvents_2 = rawEvents; _i < rawEvents_2.length; _i++) {
			            var rawEvent = rawEvents_2[_i];
			            var refinedEvent = func(rawEvent);
			            if (refinedEvent) {
			                refinedEvents.push(refinedEvent);
			            }
			            else if (refinedEvent == null) {
			                refinedEvents.push(rawEvent);
			            } // if a different falsy value, do nothing
			        }
			    }
			    return refinedEvents;
			}
			function createEmptyEventStore() {
			    return { defs: {}, instances: {} };
			}
			function mergeEventStores(store0, store1) {
			    return {
			        defs: __assign({}, store0.defs, store1.defs),
			        instances: __assign({}, store0.instances, store1.instances)
			    };
			}
			function filterEventStoreDefs(eventStore, filterFunc) {
			    var defs = filterHash(eventStore.defs, filterFunc);
			    var instances = filterHash(eventStore.instances, function (instance) {
			        return defs[instance.defId]; // still exists?
			    });
			    return { defs: defs, instances: instances };
			}

			function parseRange(input, dateEnv) {
			    var start = null;
			    var end = null;
			    if (input.start) {
			        start = dateEnv.createMarker(input.start);
			    }
			    if (input.end) {
			        end = dateEnv.createMarker(input.end);
			    }
			    if (!start && !end) {
			        return null;
			    }
			    if (start && end && end < start) {
			        return null;
			    }
			    return { start: start, end: end };
			}
			// SIDE-EFFECT: will mutate ranges.
			// Will return a new array result.
			function invertRanges(ranges, constraintRange) {
			    var invertedRanges = [];
			    var start = constraintRange.start; // the end of the previous range. the start of the new range
			    var i;
			    var dateRange;
			    // ranges need to be in order. required for our date-walking algorithm
			    ranges.sort(compareRanges);
			    for (i = 0; i < ranges.length; i++) {
			        dateRange = ranges[i];
			        // add the span of time before the event (if there is any)
			        if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
			            invertedRanges.push({ start: start, end: dateRange.start });
			        }
			        if (dateRange.end > start) {
			            start = dateRange.end;
			        }
			    }
			    // add the span of time after the last event (if there is any)
			    if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
			        invertedRanges.push({ start: start, end: constraintRange.end });
			    }
			    return invertedRanges;
			}
			function compareRanges(range0, range1) {
			    return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
			}
			function intersectRanges(range0, range1) {
			    var start = range0.start;
			    var end = range0.end;
			    var newRange = null;
			    if (range1.start !== null) {
			        if (start === null) {
			            start = range1.start;
			        }
			        else {
			            start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
			        }
			    }
			    if (range1.end != null) {
			        if (end === null) {
			            end = range1.end;
			        }
			        else {
			            end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
			        }
			    }
			    if (start === null || end === null || start < end) {
			        newRange = { start: start, end: end };
			    }
			    return newRange;
			}
			function rangesEqual(range0, range1) {
			    return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
			        (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
			}
			function rangesIntersect(range0, range1) {
			    return (range0.end === null || range1.start === null || range0.end > range1.start) &&
			        (range0.start === null || range1.end === null || range0.start < range1.end);
			}
			function rangeContainsRange(outerRange, innerRange) {
			    return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
			        (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
			}
			function rangeContainsMarker(range, date) {
			    return (range.start === null || date >= range.start) &&
			        (range.end === null || date < range.end);
			}
			// If the given date is not within the given range, move it inside.
			// (If it's past the end, make it one millisecond before the end).
			function constrainMarkerToRange(date, range) {
			    if (range.start != null && date < range.start) {
			        return range.start;
			    }
			    if (range.end != null && date >= range.end) {
			        return new Date(range.end.valueOf() - 1);
			    }
			    return date;
			}
			function isArraysEqual(a0, a1) {
			    var len = a0.length;
			    var i;
			    if (len !== a1.length) { // not array? or not same length?
			        return false;
			    }
			    for (i = 0; i < len; i++) {
			        if (a0[i] !== a1[i]) {
			            return false;
			        }
			    }
			    return true;
			}

			function memoize(workerFunc) {
			    var args;
			    var res;
			    return function () {
			        if (!args || !isArraysEqual(args, arguments)) {
			            args = arguments;
			            res = workerFunc.apply(this, arguments);
			        }
			        return res;
			    };
			}
			/*
			always executes the workerFunc, but if the result is equal to the previous result,
			return the previous result instead.
			*/
			function memoizeOutput(workerFunc, equalityFunc) {
			    var cachedRes = null;
			    return function () {
			        var newRes = workerFunc.apply(this, arguments);
			        if (cachedRes === null || !(cachedRes === newRes || equalityFunc(cachedRes, newRes))) {
			            cachedRes = newRes;
			        }
			        return cachedRes;
			    };
			}

			var EXTENDED_SETTINGS_AND_SEVERITIES = {
			    week: 3,
			    separator: 0,
			    omitZeroMinute: 0,
			    meridiem: 0,
			    omitCommas: 0
			};
			var STANDARD_DATE_PROP_SEVERITIES = {
			    timeZoneName: 7,
			    era: 6,
			    year: 5,
			    month: 4,
			    day: 2,
			    weekday: 2,
			    hour: 1,
			    minute: 1,
			    second: 1
			};
			var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
			var COMMA_RE = /,/g; // we need re for globalness
			var MULTI_SPACE_RE = /\s+/g;
			var LTR_RE = /\u200e/g; // control character
			var UTC_RE = /UTC|GMT/;
			var NativeFormatter = /** @class */ (function () {
			    function NativeFormatter(formatSettings) {
			        var standardDateProps = {};
			        var extendedSettings = {};
			        var severity = 0;
			        for (var name_1 in formatSettings) {
			            if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
			                extendedSettings[name_1] = formatSettings[name_1];
			                severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
			            }
			            else {
			                standardDateProps[name_1] = formatSettings[name_1];
			                if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
			                    severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
			                }
			            }
			        }
			        this.standardDateProps = standardDateProps;
			        this.extendedSettings = extendedSettings;
			        this.severity = severity;
			        this.buildFormattingFunc = memoize(buildFormattingFunc);
			    }
			    NativeFormatter.prototype.format = function (date, context) {
			        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
			    };
			    NativeFormatter.prototype.formatRange = function (start, end, context) {
			        var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
			        var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
			        if (!diffSeverity) {
			            return this.format(start, context);
			        }
			        var biggestUnitForPartial = diffSeverity;
			        if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
			            (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
			            (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
			            (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
			            biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
			        }
			        var full0 = this.format(start, context);
			        var full1 = this.format(end, context);
			        if (full0 === full1) {
			            return full0;
			        }
			        var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
			        var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
			        var partial0 = partialFormattingFunc(start);
			        var partial1 = partialFormattingFunc(end);
			        var insertion = findCommonInsertion(full0, partial0, full1, partial1);
			        var separator = extendedSettings.separator || '';
			        if (insertion) {
			            return insertion.before + partial0 + separator + partial1 + insertion.after;
			        }
			        return full0 + separator + full1;
			    };
			    NativeFormatter.prototype.getLargestUnit = function () {
			        switch (this.severity) {
			            case 7:
			            case 6:
			            case 5:
			                return 'year';
			            case 4:
			                return 'month';
			            case 3:
			                return 'week';
			            default:
			                return 'day';
			        }
			    };
			    return NativeFormatter;
			}());
			function buildFormattingFunc(standardDateProps, extendedSettings, context) {
			    var standardDatePropCnt = Object.keys(standardDateProps).length;
			    if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
			        return function (date) {
			            return formatTimeZoneOffset(date.timeZoneOffset);
			        };
			    }
			    if (standardDatePropCnt === 0 && extendedSettings.week) {
			        return function (date) {
			            return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekLabel, context.locale, extendedSettings.week);
			        };
			    }
			    return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
			}
			function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
			    standardDateProps = __assign({}, standardDateProps); // copy
			    extendedSettings = __assign({}, extendedSettings); // copy
			    sanitizeSettings(standardDateProps, extendedSettings);
			    standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
			    var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
			    var zeroFormat; // needed?
			    if (extendedSettings.omitZeroMinute) {
			        var zeroProps = __assign({}, standardDateProps);
			        delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
			        zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
			    }
			    return function (date) {
			        var marker = date.marker;
			        var format;
			        if (zeroFormat && !marker.getUTCMinutes()) {
			            format = zeroFormat;
			        }
			        else {
			            format = normalFormat;
			        }
			        var s = format.format(marker);
			        return postProcess(s, date, standardDateProps, extendedSettings, context);
			    };
			}
			function sanitizeSettings(standardDateProps, extendedSettings) {
			    // deal with a browser inconsistency where formatting the timezone
			    // requires that the hour/minute be present.
			    if (standardDateProps.timeZoneName) {
			        if (!standardDateProps.hour) {
			            standardDateProps.hour = '2-digit';
			        }
			        if (!standardDateProps.minute) {
			            standardDateProps.minute = '2-digit';
			        }
			    }
			    // only support short timezone names
			    if (standardDateProps.timeZoneName === 'long') {
			        standardDateProps.timeZoneName = 'short';
			    }
			    // if requesting to display seconds, MUST display minutes
			    if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
			        delete extendedSettings.omitZeroMinute;
			    }
			}
			function postProcess(s, date, standardDateProps, extendedSettings, context) {
			    s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
			    if (standardDateProps.timeZoneName === 'short') {
			        s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
			            'UTC' : // important to normalize for IE, which does "GMT"
			            formatTimeZoneOffset(date.timeZoneOffset));
			    }
			    if (extendedSettings.omitCommas) {
			        s = s.replace(COMMA_RE, '').trim();
			    }
			    if (extendedSettings.omitZeroMinute) {
			        s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
			    }
			    // ^ do anything that might create adjacent spaces before this point,
			    // because MERIDIEM_RE likes to eat up loading spaces
			    if (extendedSettings.meridiem === false) {
			        s = s.replace(MERIDIEM_RE, '').trim();
			    }
			    else if (extendedSettings.meridiem === 'narrow') { // a/p
			        s = s.replace(MERIDIEM_RE, function (m0, m1) {
			            return m1.toLocaleLowerCase();
			        });
			    }
			    else if (extendedSettings.meridiem === 'short') { // am/pm
			        s = s.replace(MERIDIEM_RE, function (m0, m1) {
			            return m1.toLocaleLowerCase() + 'm';
			        });
			    }
			    else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
			        s = s.replace(MERIDIEM_RE, function (m0) {
			            return m0.toLocaleLowerCase();
			        });
			    }
			    s = s.replace(MULTI_SPACE_RE, ' ');
			    s = s.trim();
			    return s;
			}
			function injectTzoStr(s, tzoStr) {
			    var replaced = false;
			    s = s.replace(UTC_RE, function () {
			        replaced = true;
			        return tzoStr;
			    });
			    // IE11 doesn't include UTC/GMT in the original string, so append to end
			    if (!replaced) {
			        s += ' ' + tzoStr;
			    }
			    return s;
			}
			function formatWeekNumber(num, weekLabel, locale, display) {
			    var parts = [];
			    if (display === 'narrow') {
			        parts.push(weekLabel);
			    }
			    else if (display === 'short') {
			        parts.push(weekLabel, ' ');
			    }
			    // otherwise, considered 'numeric'
			    parts.push(locale.simpleNumberFormat.format(num));
			    if (locale.options.isRtl) { // TODO: use control characters instead?
			        parts.reverse();
			    }
			    return parts.join('');
			}
			// Range Formatting Utils
			// 0 = exactly the same
			// 1 = different by time
			// and bigger
			function computeMarkerDiffSeverity(d0, d1, ca) {
			    if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
			        return 5;
			    }
			    if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
			        return 4;
			    }
			    if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
			        return 2;
			    }
			    if (timeAsMs(d0) !== timeAsMs(d1)) {
			        return 1;
			    }
			    return 0;
			}
			function computePartialFormattingOptions(options, biggestUnit) {
			    var partialOptions = {};
			    for (var name_2 in options) {
			        if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
			            STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
			            partialOptions[name_2] = options[name_2];
			        }
			    }
			    return partialOptions;
			}
			function findCommonInsertion(full0, partial0, full1, partial1) {
			    var i0 = 0;
			    while (i0 < full0.length) {
			        var found0 = full0.indexOf(partial0, i0);
			        if (found0 === -1) {
			            break;
			        }
			        var before0 = full0.substr(0, found0);
			        i0 = found0 + partial0.length;
			        var after0 = full0.substr(i0);
			        var i1 = 0;
			        while (i1 < full1.length) {
			            var found1 = full1.indexOf(partial1, i1);
			            if (found1 === -1) {
			                break;
			            }
			            var before1 = full1.substr(0, found1);
			            i1 = found1 + partial1.length;
			            var after1 = full1.substr(i1);
			            if (before0 === before1 && after0 === after1) {
			                return {
			                    before: before0,
			                    after: after0
			                };
			            }
			        }
			    }
			    return null;
			}

			/*
			TODO: fix the terminology of "formatter" vs "formatting func"
			*/
			/*
			At the time of instantiation, this object does not know which cmd-formatting system it will use.
			It receives this at the time of formatting, as a setting.
			*/
			var CmdFormatter = /** @class */ (function () {
			    function CmdFormatter(cmdStr, separator) {
			        this.cmdStr = cmdStr;
			        this.separator = separator;
			    }
			    CmdFormatter.prototype.format = function (date, context) {
			        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, this.separator));
			    };
			    CmdFormatter.prototype.formatRange = function (start, end, context) {
			        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, this.separator));
			    };
			    return CmdFormatter;
			}());

			var FuncFormatter = /** @class */ (function () {
			    function FuncFormatter(func) {
			        this.func = func;
			    }
			    FuncFormatter.prototype.format = function (date, context) {
			        return this.func(createVerboseFormattingArg(date, null, context));
			    };
			    FuncFormatter.prototype.formatRange = function (start, end, context) {
			        return this.func(createVerboseFormattingArg(start, end, context));
			    };
			    return FuncFormatter;
			}());

			// Formatter Object Creation
			function createFormatter(input, defaultSeparator) {
			    if (typeof input === 'object' && input) { // non-null object
			        if (typeof defaultSeparator === 'string') {
			            input = __assign({ separator: defaultSeparator }, input);
			        }
			        return new NativeFormatter(input);
			    }
			    else if (typeof input === 'string') {
			        return new CmdFormatter(input, defaultSeparator);
			    }
			    else if (typeof input === 'function') {
			        return new FuncFormatter(input);
			    }
			}
			// String Utils
			// timeZoneOffset is in minutes
			function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
			    if (stripZeroTime === void 0) { stripZeroTime = false; }
			    var s = marker.toISOString();
			    s = s.replace('.000', '');
			    if (stripZeroTime) {
			        s = s.replace('T00:00:00Z', '');
			    }
			    if (s.length > 10) { // time part wasn't stripped, can add timezone info
			        if (timeZoneOffset == null) {
			            s = s.replace('Z', '');
			        }
			        else if (timeZoneOffset !== 0) {
			            s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
			        }
			        // otherwise, its UTC-0 and we want to keep the Z
			    }
			    return s;
			}
			function formatTimeZoneOffset(minutes, doIso) {
			    if (doIso === void 0) { doIso = false; }
			    var sign = minutes < 0 ? '-' : '+';
			    var abs = Math.abs(minutes);
			    var hours = Math.floor(abs / 60);
			    var mins = Math.round(abs % 60);
			    if (doIso) {
			        return sign + padStart(hours, 2) + ':' + padStart(mins, 2);
			    }
			    else {
			        return 'GMT' + sign + hours + (mins ? ':' + padStart(mins, 2) : '');
			    }
			}
			// Arg Utils
			function createVerboseFormattingArg(start, end, context, separator) {
			    var startInfo = expandZonedMarker(start, context.calendarSystem);
			    var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
			    return {
			        date: startInfo,
			        start: startInfo,
			        end: endInfo,
			        timeZone: context.timeZone,
			        localeCodes: context.locale.codes,
			        separator: separator
			    };
			}
			function expandZonedMarker(dateInfo, calendarSystem) {
			    var a = calendarSystem.markerToArray(dateInfo.marker);
			    return {
			        marker: dateInfo.marker,
			        timeZoneOffset: dateInfo.timeZoneOffset,
			        array: a,
			        year: a[0],
			        month: a[1],
			        day: a[2],
			        hour: a[3],
			        minute: a[4],
			        second: a[5],
			        millisecond: a[6]
			    };
			}

			var EventSourceApi = /** @class */ (function () {
			    function EventSourceApi(calendar, internalEventSource) {
			        this.calendar = calendar;
			        this.internalEventSource = internalEventSource;
			    }
			    EventSourceApi.prototype.remove = function () {
			        this.calendar.dispatch({
			            type: 'REMOVE_EVENT_SOURCE',
			            sourceId: this.internalEventSource.sourceId
			        });
			    };
			    EventSourceApi.prototype.refetch = function () {
			        this.calendar.dispatch({
			            type: 'FETCH_EVENT_SOURCES',
			            sourceIds: [this.internalEventSource.sourceId]
			        });
			    };
			    Object.defineProperty(EventSourceApi.prototype, "id", {
			        get: function () {
			            return this.internalEventSource.publicId;
			        },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventSourceApi.prototype, "url", {
			        // only relevant to json-feed event sources
			        get: function () {
			            return this.internalEventSource.meta.url;
			        },
			        enumerable: true,
			        configurable: true
			    });
			    return EventSourceApi;
			}());

			var EventApi = /** @class */ (function () {
			    function EventApi(calendar, def, instance) {
			        this._calendar = calendar;
			        this._def = def;
			        this._instance = instance || null;
			    }
			    /*
			    TODO: make event struct more responsible for this
			    */
			    EventApi.prototype.setProp = function (name, val) {
			        var _a, _b;
			        if (name in DATE_PROPS) ;
			        else if (name in NON_DATE_PROPS) {
			            if (typeof NON_DATE_PROPS[name] === 'function') {
			                val = NON_DATE_PROPS[name](val);
			            }
			            this.mutate({
			                standardProps: (_a = {}, _a[name] = val, _a)
			            });
			        }
			        else if (name in UNSCOPED_EVENT_UI_PROPS) {
			            var ui = void 0;
			            if (typeof UNSCOPED_EVENT_UI_PROPS[name] === 'function') {
			                val = UNSCOPED_EVENT_UI_PROPS[name](val);
			            }
			            if (name === 'color') {
			                ui = { backgroundColor: val, borderColor: val };
			            }
			            else if (name === 'editable') {
			                ui = { startEditable: val, durationEditable: val };
			            }
			            else {
			                ui = (_b = {}, _b[name] = val, _b);
			            }
			            this.mutate({
			                standardProps: { ui: ui }
			            });
			        }
			    };
			    EventApi.prototype.setExtendedProp = function (name, val) {
			        var _a;
			        this.mutate({
			            extendedProps: (_a = {}, _a[name] = val, _a)
			        });
			    };
			    EventApi.prototype.setStart = function (startInput, options) {
			        if (options === void 0) { options = {}; }
			        var dateEnv = this._calendar.dateEnv;
			        var start = dateEnv.createMarker(startInput);
			        if (start && this._instance) { // TODO: warning if parsed bad
			            var instanceRange = this._instance.range;
			            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
			            if (options.maintainDuration) {
			                this.mutate({ datesDelta: startDelta });
			            }
			            else {
			                this.mutate({ startDelta: startDelta });
			            }
			        }
			    };
			    EventApi.prototype.setEnd = function (endInput, options) {
			        if (options === void 0) { options = {}; }
			        var dateEnv = this._calendar.dateEnv;
			        var end;
			        if (endInput != null) {
			            end = dateEnv.createMarker(endInput);
			            if (!end) {
			                return; // TODO: warning if parsed bad
			            }
			        }
			        if (this._instance) {
			            if (end) {
			                var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
			                this.mutate({ endDelta: endDelta });
			            }
			            else {
			                this.mutate({ standardProps: { hasEnd: false } });
			            }
			        }
			    };
			    EventApi.prototype.setDates = function (startInput, endInput, options) {
			        if (options === void 0) { options = {}; }
			        var dateEnv = this._calendar.dateEnv;
			        var standardProps = { allDay: options.allDay };
			        var start = dateEnv.createMarker(startInput);
			        var end;
			        if (!start) {
			            return; // TODO: warning if parsed bad
			        }
			        if (endInput != null) {
			            end = dateEnv.createMarker(endInput);
			            if (!end) { // TODO: warning if parsed bad
			                return;
			            }
			        }
			        if (this._instance) {
			            var instanceRange = this._instance.range;
			            // when computing the diff for an event being converted to all-day,
			            // compute diff off of the all-day values the way event-mutation does.
			            if (options.allDay === true) {
			                instanceRange = computeAlignedDayRange(instanceRange);
			            }
			            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
			            if (end) {
			                var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
			                if (durationsEqual(startDelta, endDelta)) {
			                    this.mutate({ datesDelta: startDelta, standardProps: standardProps });
			                }
			                else {
			                    this.mutate({ startDelta: startDelta, endDelta: endDelta, standardProps: standardProps });
			                }
			            }
			            else { // means "clear the end"
			                standardProps.hasEnd = false;
			                this.mutate({ datesDelta: startDelta, standardProps: standardProps });
			            }
			        }
			    };
			    EventApi.prototype.moveStart = function (deltaInput) {
			        var delta = createDuration(deltaInput);
			        if (delta) { // TODO: warning if parsed bad
			            this.mutate({ startDelta: delta });
			        }
			    };
			    EventApi.prototype.moveEnd = function (deltaInput) {
			        var delta = createDuration(deltaInput);
			        if (delta) { // TODO: warning if parsed bad
			            this.mutate({ endDelta: delta });
			        }
			    };
			    EventApi.prototype.moveDates = function (deltaInput) {
			        var delta = createDuration(deltaInput);
			        if (delta) { // TODO: warning if parsed bad
			            this.mutate({ datesDelta: delta });
			        }
			    };
			    EventApi.prototype.setAllDay = function (allDay, options) {
			        if (options === void 0) { options = {}; }
			        var standardProps = { allDay: allDay };
			        var maintainDuration = options.maintainDuration;
			        if (maintainDuration == null) {
			            maintainDuration = this._calendar.opt('allDayMaintainDuration');
			        }
			        if (this._def.allDay !== allDay) {
			            standardProps.hasEnd = maintainDuration;
			        }
			        this.mutate({ standardProps: standardProps });
			    };
			    EventApi.prototype.formatRange = function (formatInput) {
			        var dateEnv = this._calendar.dateEnv;
			        var instance = this._instance;
			        var formatter = createFormatter(formatInput, this._calendar.opt('defaultRangeSeparator'));
			        if (this._def.hasEnd) {
			            return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
			                forcedStartTzo: instance.forcedStartTzo,
			                forcedEndTzo: instance.forcedEndTzo
			            });
			        }
			        else {
			            return dateEnv.format(instance.range.start, formatter, {
			                forcedTzo: instance.forcedStartTzo
			            });
			        }
			    };
			    EventApi.prototype.mutate = function (mutation) {
			        var def = this._def;
			        var instance = this._instance;
			        if (instance) {
			            this._calendar.dispatch({
			                type: 'MUTATE_EVENTS',
			                instanceId: instance.instanceId,
			                mutation: mutation,
			                fromApi: true
			            });
			            var eventStore = this._calendar.state.eventStore;
			            this._def = eventStore.defs[def.defId];
			            this._instance = eventStore.instances[instance.instanceId];
			        }
			    };
			    EventApi.prototype.remove = function () {
			        this._calendar.dispatch({
			            type: 'REMOVE_EVENT_DEF',
			            defId: this._def.defId
			        });
			    };
			    Object.defineProperty(EventApi.prototype, "source", {
			        get: function () {
			            var sourceId = this._def.sourceId;
			            if (sourceId) {
			                return new EventSourceApi(this._calendar, this._calendar.state.eventSources[sourceId]);
			            }
			            return null;
			        },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "start", {
			        get: function () {
			            return this._instance ?
			                this._calendar.dateEnv.toDate(this._instance.range.start) :
			                null;
			        },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "end", {
			        get: function () {
			            return (this._instance && this._def.hasEnd) ?
			                this._calendar.dateEnv.toDate(this._instance.range.end) :
			                null;
			        },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "id", {
			        // computable props that all access the def
			        // TODO: find a TypeScript-compatible way to do this at scale
			        get: function () { return this._def.publicId; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "groupId", {
			        get: function () { return this._def.groupId; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "allDay", {
			        get: function () { return this._def.allDay; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "title", {
			        get: function () { return this._def.title; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "url", {
			        get: function () { return this._def.url; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "rendering", {
			        get: function () { return this._def.rendering; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "startEditable", {
			        get: function () { return this._def.ui.startEditable; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "durationEditable", {
			        get: function () { return this._def.ui.durationEditable; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "constraint", {
			        get: function () { return this._def.ui.constraints[0] || null; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "overlap", {
			        get: function () { return this._def.ui.overlap; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "allow", {
			        get: function () { return this._def.ui.allows[0] || null; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "backgroundColor", {
			        get: function () { return this._def.ui.backgroundColor; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "borderColor", {
			        get: function () { return this._def.ui.borderColor; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "textColor", {
			        get: function () { return this._def.ui.textColor; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "classNames", {
			        // NOTE: user can't modify these because Object.freeze was called in event-def parsing
			        get: function () { return this._def.ui.classNames; },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(EventApi.prototype, "extendedProps", {
			        get: function () { return this._def.extendedProps; },
			        enumerable: true,
			        configurable: true
			    });
			    return EventApi;
			}());

			/*
			Specifying nextDayThreshold signals that all-day ranges should be sliced.
			*/
			function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
			    var inverseBgByGroupId = {};
			    var inverseBgByDefId = {};
			    var defByGroupId = {};
			    var bgRanges = [];
			    var fgRanges = [];
			    var eventUis = compileEventUis(eventStore.defs, eventUiBases);
			    for (var defId in eventStore.defs) {
			        var def = eventStore.defs[defId];
			        if (def.rendering === 'inverse-background') {
			            if (def.groupId) {
			                inverseBgByGroupId[def.groupId] = [];
			                if (!defByGroupId[def.groupId]) {
			                    defByGroupId[def.groupId] = def;
			                }
			            }
			            else {
			                inverseBgByDefId[defId] = [];
			            }
			        }
			    }
			    for (var instanceId in eventStore.instances) {
			        var instance = eventStore.instances[instanceId];
			        var def = eventStore.defs[instance.defId];
			        var ui = eventUis[def.defId];
			        var origRange = instance.range;
			        var normalRange = (!def.allDay && nextDayThreshold) ?
			            computeVisibleDayRange(origRange, nextDayThreshold) :
			            origRange;
			        var slicedRange = intersectRanges(normalRange, framingRange);
			        if (slicedRange) {
			            if (def.rendering === 'inverse-background') {
			                if (def.groupId) {
			                    inverseBgByGroupId[def.groupId].push(slicedRange);
			                }
			                else {
			                    inverseBgByDefId[instance.defId].push(slicedRange);
			                }
			            }
			            else {
			                (def.rendering === 'background' ? bgRanges : fgRanges).push({
			                    def: def,
			                    ui: ui,
			                    instance: instance,
			                    range: slicedRange,
			                    isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
			                    isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
			                });
			            }
			        }
			    }
			    for (var groupId in inverseBgByGroupId) { // BY GROUP
			        var ranges = inverseBgByGroupId[groupId];
			        var invertedRanges = invertRanges(ranges, framingRange);
			        for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
			            var invertedRange = invertedRanges_1[_i];
			            var def = defByGroupId[groupId];
			            var ui = eventUis[def.defId];
			            bgRanges.push({
			                def: def,
			                ui: ui,
			                instance: null,
			                range: invertedRange,
			                isStart: false,
			                isEnd: false
			            });
			        }
			    }
			    for (var defId in inverseBgByDefId) {
			        var ranges = inverseBgByDefId[defId];
			        var invertedRanges = invertRanges(ranges, framingRange);
			        for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
			            var invertedRange = invertedRanges_2[_a];
			            bgRanges.push({
			                def: eventStore.defs[defId],
			                ui: eventUis[defId],
			                instance: null,
			                range: invertedRange,
			                isStart: false,
			                isEnd: false
			            });
			        }
			    }
			    return { bg: bgRanges, fg: fgRanges };
			}
			function filterSegsViaEls(context, segs, isMirror) {
			    var calendar = context.calendar, view = context.view;
			    if (calendar.hasPublicHandlers('eventRender')) {
			        segs = segs.filter(function (seg) {
			            var custom = calendar.publiclyTrigger('eventRender', [
			                {
			                    event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
			                    isMirror: isMirror,
			                    isStart: seg.isStart,
			                    isEnd: seg.isEnd,
			                    // TODO: include seg.range once all components consistently generate it
			                    el: seg.el,
			                    view: view
			                }
			            ]);
			            if (custom === false) { // means don't render at all
			                return false;
			            }
			            else if (custom && custom !== true) {
			                seg.el = custom;
			            }
			            return true;
			        });
			    }
			    for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
			        var seg = segs_1[_i];
			        setElSeg(seg.el, seg);
			    }
			    return segs;
			}
			function setElSeg(el, seg) {
			    el.fcSeg = seg;
			}
			function getElSeg(el) {
			    return el.fcSeg || null;
			}
			// event ui computation
			function compileEventUis(eventDefs, eventUiBases) {
			    return mapHash(eventDefs, function (eventDef) {
			        return compileEventUi(eventDef, eventUiBases);
			    });
			}
			function compileEventUi(eventDef, eventUiBases) {
			    var uis = [];
			    if (eventUiBases['']) {
			        uis.push(eventUiBases['']);
			    }
			    if (eventUiBases[eventDef.defId]) {
			        uis.push(eventUiBases[eventDef.defId]);
			    }
			    uis.push(eventDef.ui);
			    return combineEventUis(uis);
			}
			// triggers
			function triggerRenderedSegs(context, segs, isMirrors) {
			    var calendar = context.calendar, view = context.view;
			    if (calendar.hasPublicHandlers('eventPositioned')) {
			        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
			            var seg = segs_2[_i];
			            calendar.publiclyTriggerAfterSizing('eventPositioned', [
			                {
			                    event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
			                    isMirror: isMirrors,
			                    isStart: seg.isStart,
			                    isEnd: seg.isEnd,
			                    el: seg.el,
			                    view: view
			                }
			            ]);
			        }
			    }
			    if (!calendar.state.loadingLevel) { // avoid initial empty state while pending
			        calendar.afterSizingTriggers._eventsPositioned = [null]; // fire once
			    }
			}
			function triggerWillRemoveSegs(context, segs, isMirrors) {
			    var calendar = context.calendar, view = context.view;
			    for (var _i = 0, segs_3 = segs; _i < segs_3.length; _i++) {
			        var seg = segs_3[_i];
			        calendar.trigger('eventElRemove', seg.el);
			    }
			    if (calendar.hasPublicHandlers('eventDestroy')) {
			        for (var _a = 0, segs_4 = segs; _a < segs_4.length; _a++) {
			            var seg = segs_4[_a];
			            calendar.publiclyTrigger('eventDestroy', [
			                {
			                    event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
			                    isMirror: isMirrors,
			                    el: seg.el,
			                    view: view
			                }
			            ]);
			        }
			    }
			}
			// is-interactable
			function computeEventDraggable(context, eventDef, eventUi) {
			    var calendar = context.calendar, view = context.view;
			    var transformers = calendar.pluginSystem.hooks.isDraggableTransformers;
			    var val = eventUi.startEditable;
			    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
			        var transformer = transformers_1[_i];
			        val = transformer(val, eventDef, eventUi, view);
			    }
			    return val;
			}
			function computeEventStartResizable(context, eventDef, eventUi) {
			    return eventUi.durationEditable && context.options.eventResizableFromStart;
			}
			function computeEventEndResizable(context, eventDef, eventUi) {
			    return eventUi.durationEditable;
			}

			// applies the mutation to ALL defs/instances within the event store
			function applyMutationToEventStore(eventStore, eventConfigBase, mutation, calendar) {
			    var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
			    var dest = createEmptyEventStore();
			    for (var defId in eventStore.defs) {
			        var def = eventStore.defs[defId];
			        dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, calendar.pluginSystem.hooks.eventDefMutationAppliers, calendar);
			    }
			    for (var instanceId in eventStore.instances) {
			        var instance = eventStore.instances[instanceId];
			        var def = dest.defs[instance.defId]; // important to grab the newly modified def
			        dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, calendar);
			    }
			    return dest;
			}
			function applyMutationToEventDef(eventDef, eventConfig, mutation, appliers, calendar) {
			    var standardProps = mutation.standardProps || {};
			    // if hasEnd has not been specified, guess a good value based on deltas.
			    // if duration will change, there's no way the default duration will persist,
			    // and thus, we need to mark the event as having a real end
			    if (standardProps.hasEnd == null &&
			        eventConfig.durationEditable &&
			        (mutation.startDelta || mutation.endDelta)) {
			        standardProps.hasEnd = true; // TODO: is this mutation okay?
			    }
			    var copy = __assign({}, eventDef, standardProps, { ui: __assign({}, eventDef.ui, standardProps.ui) });
			    if (mutation.extendedProps) {
			        copy.extendedProps = __assign({}, copy.extendedProps, mutation.extendedProps);
			    }
			    for (var _i = 0, appliers_1 = appliers; _i < appliers_1.length; _i++) {
			        var applier = appliers_1[_i];
			        applier(copy, mutation, calendar);
			    }
			    if (!copy.hasEnd && calendar.opt('forceEventDuration')) {
			        copy.hasEnd = true;
			    }
			    return copy;
			}
			function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
			eventConfig, mutation, calendar) {
			    var dateEnv = calendar.dateEnv;
			    var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
			    var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
			    var copy = __assign({}, eventInstance);
			    if (forceAllDay) {
			        copy.range = computeAlignedDayRange(copy.range);
			    }
			    if (mutation.datesDelta && eventConfig.startEditable) {
			        copy.range = {
			            start: dateEnv.add(copy.range.start, mutation.datesDelta),
			            end: dateEnv.add(copy.range.end, mutation.datesDelta)
			        };
			    }
			    if (mutation.startDelta && eventConfig.durationEditable) {
			        copy.range = {
			            start: dateEnv.add(copy.range.start, mutation.startDelta),
			            end: copy.range.end
			        };
			    }
			    if (mutation.endDelta && eventConfig.durationEditable) {
			        copy.range = {
			            start: copy.range.start,
			            end: dateEnv.add(copy.range.end, mutation.endDelta)
			        };
			    }
			    if (clearEnd) {
			        copy.range = {
			            start: copy.range.start,
			            end: calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start)
			        };
			    }
			    // in case event was all-day but the supplied deltas were not
			    // better util for this?
			    if (eventDef.allDay) {
			        copy.range = {
			            start: startOfDay(copy.range.start),
			            end: startOfDay(copy.range.end)
			        };
			    }
			    // handle invalid durations
			    if (copy.range.end < copy.range.start) {
			        copy.range.end = calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start);
			    }
			    return copy;
			}

			function reduceEventStore (eventStore, action, eventSources, dateProfile, calendar) {
			    switch (action.type) {
			        case 'RECEIVE_EVENTS': // raw
			            return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, calendar);
			        case 'ADD_EVENTS': // already parsed, but not expanded
			            return addEvent(eventStore, action.eventStore, // new ones
			            dateProfile ? dateProfile.activeRange : null, calendar);
			        case 'MERGE_EVENTS': // already parsed and expanded
			            return mergeEventStores(eventStore, action.eventStore);
			        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
			        case 'NEXT':
			        case 'SET_DATE':
			        case 'SET_VIEW_TYPE':
			            if (dateProfile) {
			                return expandRecurring(eventStore, dateProfile.activeRange, calendar);
			            }
			            else {
			                return eventStore;
			            }
			        case 'CHANGE_TIMEZONE':
			            return rezoneDates(eventStore, action.oldDateEnv, calendar.dateEnv);
			        case 'MUTATE_EVENTS':
			            return applyMutationToRelated(eventStore, action.instanceId, action.mutation, action.fromApi, calendar);
			        case 'REMOVE_EVENT_INSTANCES':
			            return excludeInstances(eventStore, action.instances);
			        case 'REMOVE_EVENT_DEF':
			            return filterEventStoreDefs(eventStore, function (eventDef) {
			                return eventDef.defId !== action.defId;
			            });
			        case 'REMOVE_EVENT_SOURCE':
			            return excludeEventsBySourceId(eventStore, action.sourceId);
			        case 'REMOVE_ALL_EVENT_SOURCES':
			            return filterEventStoreDefs(eventStore, function (eventDef) {
			                return !eventDef.sourceId; // only keep events with no source id
			            });
			        case 'REMOVE_ALL_EVENTS':
			            return createEmptyEventStore();
			        case 'RESET_EVENTS':
			            return {
			                defs: eventStore.defs,
			                instances: eventStore.instances
			            };
			        default:
			            return eventStore;
			    }
			}
			function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, calendar) {
			    if (eventSource && // not already removed
			        fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
			    ) {
			        var subset = parseEvents(transformRawEvents(rawEvents, eventSource, calendar), eventSource.sourceId, calendar);
			        if (fetchRange) {
			            subset = expandRecurring(subset, fetchRange, calendar);
			        }
			        return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
			    }
			    return eventStore;
			}
			function addEvent(eventStore, subset, expandRange, calendar) {
			    if (expandRange) {
			        subset = expandRecurring(subset, expandRange, calendar);
			    }
			    return mergeEventStores(eventStore, subset);
			}
			function rezoneDates(eventStore, oldDateEnv, newDateEnv) {
			    var defs = eventStore.defs;
			    var instances = mapHash(eventStore.instances, function (instance) {
			        var def = defs[instance.defId];
			        if (def.allDay || def.recurringDef) {
			            return instance; // isn't dependent on timezone
			        }
			        else {
			            return __assign({}, instance, { range: {
			                    start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
			                    end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
			                }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
			        }
			    });
			    return { defs: defs, instances: instances };
			}
			function applyMutationToRelated(eventStore, instanceId, mutation, fromApi, calendar) {
			    var relevant = getRelevantEvents(eventStore, instanceId);
			    var eventConfigBase = fromApi ?
			        { '': {
			                startEditable: true,
			                durationEditable: true,
			                constraints: [],
			                overlap: null,
			                allows: [],
			                backgroundColor: '',
			                borderColor: '',
			                textColor: '',
			                classNames: []
			            } } :
			        calendar.eventUiBases;
			    relevant = applyMutationToEventStore(relevant, eventConfigBase, mutation, calendar);
			    return mergeEventStores(eventStore, relevant);
			}
			function excludeEventsBySourceId(eventStore, sourceId) {
			    return filterEventStoreDefs(eventStore, function (eventDef) {
			        return eventDef.sourceId !== sourceId;
			    });
			}
			// QUESTION: why not just return instances? do a general object-property-exclusion util
			function excludeInstances(eventStore, removals) {
			    return {
			        defs: eventStore.defs,
			        instances: filterHash(eventStore.instances, function (instance) {
			            return !removals[instance.instanceId];
			        })
			    };
			}

			// high-level segmenting-aware tester functions
			// ------------------------------------------------------------------------------------------------------------------------
			function isInteractionValid(interaction, calendar) {
			    return isNewPropsValid({ eventDrag: interaction }, calendar); // HACK: the eventDrag props is used for ALL interactions
			}
			function isDateSelectionValid(dateSelection, calendar) {
			    return isNewPropsValid({ dateSelection: dateSelection }, calendar);
			}
			function isNewPropsValid(newProps, calendar) {
			    var view = calendar.view;
			    var props = __assign({ businessHours: view ? view.props.businessHours : createEmptyEventStore(), dateSelection: '', eventStore: calendar.state.eventStore, eventUiBases: calendar.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
			    return (calendar.pluginSystem.hooks.isPropsValid || isPropsValid)(props, calendar);
			}
			function isPropsValid(state, calendar, dateSpanMeta, filterConfig) {
			    if (dateSpanMeta === void 0) { dateSpanMeta = {}; }
			    if (state.eventDrag && !isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
			        return false;
			    }
			    if (state.dateSelection && !isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
			        return false;
			    }
			    return true;
			}
			// Moving Event Validation
			// ------------------------------------------------------------------------------------------------------------------------
			function isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
			    var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
			    var subjectEventStore = interaction.mutatedEvents;
			    var subjectDefs = subjectEventStore.defs;
			    var subjectInstances = subjectEventStore.instances;
			    var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
			        state.eventUiBases :
			        { '': calendar.selectionConfig } // if not a real event, validate as a selection
			    );
			    if (filterConfig) {
			        subjectConfigs = mapHash(subjectConfigs, filterConfig);
			    }
			    var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances); // exclude the subject events. TODO: exclude defs too?
			    var otherDefs = otherEventStore.defs;
			    var otherInstances = otherEventStore.instances;
			    var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
			    for (var subjectInstanceId in subjectInstances) {
			        var subjectInstance = subjectInstances[subjectInstanceId];
			        var subjectRange = subjectInstance.range;
			        var subjectConfig = subjectConfigs[subjectInstance.defId];
			        var subjectDef = subjectDefs[subjectInstance.defId];
			        // constraint
			        if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, calendar)) {
			            return false;
			        }
			        // overlap
			        var overlapFunc = calendar.opt('eventOverlap');
			        if (typeof overlapFunc !== 'function') {
			            overlapFunc = null;
			        }
			        for (var otherInstanceId in otherInstances) {
			            var otherInstance = otherInstances[otherInstanceId];
			            // intersect! evaluate
			            if (rangesIntersect(subjectRange, otherInstance.range)) {
			                var otherOverlap = otherConfigs[otherInstance.defId].overlap;
			                // consider the other event's overlap. only do this if the subject event is a "real" event
			                if (otherOverlap === false && interaction.isEvent) {
			                    return false;
			                }
			                if (subjectConfig.overlap === false) {
			                    return false;
			                }
			                if (overlapFunc && !overlapFunc(new EventApi(calendar, otherDefs[otherInstance.defId], otherInstance), // still event
			                new EventApi(calendar, subjectDef, subjectInstance) // moving event
			                )) {
			                    return false;
			                }
			            }
			        }
			        // allow (a function)
			        var calendarEventStore = calendar.state.eventStore; // need global-to-calendar, not local to component (splittable)state
			        for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
			            var subjectAllow = _a[_i];
			            var subjectDateSpan = __assign({}, dateSpanMeta, { range: subjectInstance.range, allDay: subjectDef.allDay });
			            var origDef = calendarEventStore.defs[subjectDef.defId];
			            var origInstance = calendarEventStore.instances[subjectInstanceId];
			            var eventApi = void 0;
			            if (origDef) { // was previously in the calendar
			                eventApi = new EventApi(calendar, origDef, origInstance);
			            }
			            else { // was an external event
			                eventApi = new EventApi(calendar, subjectDef); // no instance, because had no dates
			            }
			            if (!subjectAllow(calendar.buildDateSpanApi(subjectDateSpan), eventApi)) {
			                return false;
			            }
			        }
			    }
			    return true;
			}
			// Date Selection Validation
			// ------------------------------------------------------------------------------------------------------------------------
			function isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
			    var relevantEventStore = state.eventStore;
			    var relevantDefs = relevantEventStore.defs;
			    var relevantInstances = relevantEventStore.instances;
			    var selection = state.dateSelection;
			    var selectionRange = selection.range;
			    var selectionConfig = calendar.selectionConfig;
			    if (filterConfig) {
			        selectionConfig = filterConfig(selectionConfig);
			    }
			    // constraint
			    if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, calendar)) {
			        return false;
			    }
			    // overlap
			    var overlapFunc = calendar.opt('selectOverlap');
			    if (typeof overlapFunc !== 'function') {
			        overlapFunc = null;
			    }
			    for (var relevantInstanceId in relevantInstances) {
			        var relevantInstance = relevantInstances[relevantInstanceId];
			        // intersect! evaluate
			        if (rangesIntersect(selectionRange, relevantInstance.range)) {
			            if (selectionConfig.overlap === false) {
			                return false;
			            }
			            if (overlapFunc && !overlapFunc(new EventApi(calendar, relevantDefs[relevantInstance.defId], relevantInstance))) {
			                return false;
			            }
			        }
			    }
			    // allow (a function)
			    for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
			        var selectionAllow = _a[_i];
			        var fullDateSpan = __assign({}, dateSpanMeta, selection);
			        if (!selectionAllow(calendar.buildDateSpanApi(fullDateSpan), null)) {
			            return false;
			        }
			    }
			    return true;
			}
			// Constraint Utils
			// ------------------------------------------------------------------------------------------------------------------------
			function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, calendar) {
			    for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
			        var constraint = constraints_1[_i];
			        if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, calendar), subjectRange)) {
			            return false;
			        }
			    }
			    return true;
			}
			function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
			otherEventStore, // for if constraint is an even group ID
			businessHoursUnexpanded, // for if constraint is 'businessHours'
			calendar // for expanding businesshours
			) {
			    if (constraint === 'businessHours') {
			        return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, calendar));
			    }
			    else if (typeof constraint === 'string') { // an group ID
			        return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
			            return eventDef.groupId === constraint;
			        }));
			    }
			    else if (typeof constraint === 'object' && constraint) { // non-null object
			        return eventStoreToRanges(expandRecurring(constraint, subjectRange, calendar));
			    }
			    return []; // if it's false
			}
			// TODO: move to event-store file?
			function eventStoreToRanges(eventStore) {
			    var instances = eventStore.instances;
			    var ranges = [];
			    for (var instanceId in instances) {
			        ranges.push(instances[instanceId].range);
			    }
			    return ranges;
			}
			// TODO: move to geom file?
			function anyRangesContainRange(outerRanges, innerRange) {
			    for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
			        var outerRange = outerRanges_1[_i];
			        if (rangeContainsRange(outerRange, innerRange)) {
			            return true;
			        }
			    }
			    return false;
			}
			// Parsing
			// ------------------------------------------------------------------------------------------------------------------------
			function normalizeConstraint(input, calendar) {
			    if (Array.isArray(input)) {
			        return parseEvents(input, '', calendar, true); // allowOpenRange=true
			    }
			    else if (typeof input === 'object' && input) { // non-null object
			        return parseEvents([input], '', calendar, true); // allowOpenRange=true
			    }
			    else if (input != null) {
			        return String(input);
			    }
			    else {
			        return null;
			    }
			}

			function htmlEscape(s) {
			    return (s + '').replace(/&/g, '&amp;')
			        .replace(/</g, '&lt;')
			        .replace(/>/g, '&gt;')
			        .replace(/'/g, '&#039;')
			        .replace(/"/g, '&quot;')
			        .replace(/\n/g, '<br />');
			}
			// Given a hash of CSS properties, returns a string of CSS.
			// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
			function cssToStr(cssProps) {
			    var statements = [];
			    for (var name_1 in cssProps) {
			        var val = cssProps[name_1];
			        if (val != null && val !== '') {
			            statements.push(name_1 + ':' + val);
			        }
			    }
			    return statements.join(';');
			}
			// Given an object hash of HTML attribute names to values,
			// generates a string that can be injected between < > in HTML
			function attrsToStr(attrs) {
			    var parts = [];
			    for (var name_2 in attrs) {
			        var val = attrs[name_2];
			        if (val != null) {
			            parts.push(name_2 + '="' + htmlEscape(val) + '"');
			        }
			    }
			    return parts.join(' ');
			}
			function parseClassName(raw) {
			    if (Array.isArray(raw)) {
			        return raw;
			    }
			    else if (typeof raw === 'string') {
			        return raw.split(/\s+/);
			    }
			    else {
			        return [];
			    }
			}

			var UNSCOPED_EVENT_UI_PROPS = {
			    editable: Boolean,
			    startEditable: Boolean,
			    durationEditable: Boolean,
			    constraint: null,
			    overlap: null,
			    allow: null,
			    className: parseClassName,
			    classNames: parseClassName,
			    color: String,
			    backgroundColor: String,
			    borderColor: String,
			    textColor: String
			};
			function processUnscopedUiProps(rawProps, calendar, leftovers) {
			    var props = refineProps(rawProps, UNSCOPED_EVENT_UI_PROPS, {}, leftovers);
			    var constraint = normalizeConstraint(props.constraint, calendar);
			    return {
			        startEditable: props.startEditable != null ? props.startEditable : props.editable,
			        durationEditable: props.durationEditable != null ? props.durationEditable : props.editable,
			        constraints: constraint != null ? [constraint] : [],
			        overlap: props.overlap,
			        allows: props.allow != null ? [props.allow] : [],
			        backgroundColor: props.backgroundColor || props.color,
			        borderColor: props.borderColor || props.color,
			        textColor: props.textColor,
			        classNames: props.classNames.concat(props.className)
			    };
			}
			function processScopedUiProps(prefix, rawScoped, calendar, leftovers) {
			    var rawUnscoped = {};
			    var wasFound = {};
			    for (var key in UNSCOPED_EVENT_UI_PROPS) {
			        var scopedKey = prefix + capitaliseFirstLetter(key);
			        rawUnscoped[key] = rawScoped[scopedKey];
			        wasFound[scopedKey] = true;
			    }
			    if (prefix === 'event') {
			        rawUnscoped.editable = rawScoped.editable; // special case. there is no 'eventEditable', just 'editable'
			    }
			    if (leftovers) {
			        for (var key in rawScoped) {
			            if (!wasFound[key]) {
			                leftovers[key] = rawScoped[key];
			            }
			        }
			    }
			    return processUnscopedUiProps(rawUnscoped, calendar);
			}
			var EMPTY_EVENT_UI = {
			    startEditable: null,
			    durationEditable: null,
			    constraints: [],
			    overlap: null,
			    allows: [],
			    backgroundColor: '',
			    borderColor: '',
			    textColor: '',
			    classNames: []
			};
			// prevent against problems with <2 args!
			function combineEventUis(uis) {
			    return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
			}
			function combineTwoEventUis(item0, item1) {
			    return {
			        startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
			        durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
			        constraints: item0.constraints.concat(item1.constraints),
			        overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
			        allows: item0.allows.concat(item1.allows),
			        backgroundColor: item1.backgroundColor || item0.backgroundColor,
			        borderColor: item1.borderColor || item0.borderColor,
			        textColor: item1.textColor || item0.textColor,
			        classNames: item0.classNames.concat(item1.classNames)
			    };
			}

			var NON_DATE_PROPS = {
			    id: String,
			    groupId: String,
			    title: String,
			    url: String,
			    rendering: String,
			    extendedProps: null
			};
			var DATE_PROPS = {
			    start: null,
			    date: null,
			    end: null,
			    allDay: null
			};
			var uid = 0;
			function parseEvent(raw, sourceId, calendar, allowOpenRange) {
			    var allDayDefault = computeIsAllDayDefault(sourceId, calendar);
			    var leftovers0 = {};
			    var recurringRes = parseRecurring(raw, // raw, but with single-event stuff stripped out
			    allDayDefault, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes, leftovers0 // will populate with non-recurring props
			    );
			    if (recurringRes) {
			        var def = parseEventDef(leftovers0, sourceId, recurringRes.allDay, Boolean(recurringRes.duration), calendar);
			        def.recurringDef = {
			            typeId: recurringRes.typeId,
			            typeData: recurringRes.typeData,
			            duration: recurringRes.duration
			        };
			        return { def: def, instance: null };
			    }
			    else {
			        var leftovers1 = {};
			        var singleRes = parseSingle(raw, allDayDefault, calendar, leftovers1, allowOpenRange);
			        if (singleRes) {
			            var def = parseEventDef(leftovers1, sourceId, singleRes.allDay, singleRes.hasEnd, calendar);
			            var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
			            return { def: def, instance: instance };
			        }
			    }
			    return null;
			}
			/*
			Will NOT populate extendedProps with the leftover properties.
			Will NOT populate date-related props.
			The EventNonDateInput has been normalized (id => publicId, etc).
			*/
			function parseEventDef(raw, sourceId, allDay, hasEnd, calendar) {
			    var leftovers = {};
			    var def = pluckNonDateProps(raw, calendar, leftovers);
			    def.defId = String(uid++);
			    def.sourceId = sourceId;
			    def.allDay = allDay;
			    def.hasEnd = hasEnd;
			    for (var _i = 0, _a = calendar.pluginSystem.hooks.eventDefParsers; _i < _a.length; _i++) {
			        var eventDefParser = _a[_i];
			        var newLeftovers = {};
			        eventDefParser(def, leftovers, newLeftovers);
			        leftovers = newLeftovers;
			    }
			    def.extendedProps = __assign(leftovers, def.extendedProps || {});
			    // help out EventApi from having user modify props
			    Object.freeze(def.ui.classNames);
			    Object.freeze(def.extendedProps);
			    return def;
			}
			function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
			    return {
			        instanceId: String(uid++),
			        defId: defId,
			        range: range,
			        forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
			        forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
			    };
			}
			function parseSingle(raw, allDayDefault, calendar, leftovers, allowOpenRange) {
			    var props = pluckDateProps(raw, leftovers);
			    var allDay = props.allDay;
			    var startMeta;
			    var startMarker = null;
			    var hasEnd = false;
			    var endMeta;
			    var endMarker = null;
			    startMeta = calendar.dateEnv.createMarkerMeta(props.start);
			    if (startMeta) {
			        startMarker = startMeta.marker;
			    }
			    else if (!allowOpenRange) {
			        return null;
			    }
			    if (props.end != null) {
			        endMeta = calendar.dateEnv.createMarkerMeta(props.end);
			    }
			    if (allDay == null) {
			        if (allDayDefault != null) {
			            allDay = allDayDefault;
			        }
			        else {
			            // fall back to the date props LAST
			            allDay = (!startMeta || startMeta.isTimeUnspecified) &&
			                (!endMeta || endMeta.isTimeUnspecified);
			        }
			    }
			    if (allDay && startMarker) {
			        startMarker = startOfDay(startMarker);
			    }
			    if (endMeta) {
			        endMarker = endMeta.marker;
			        if (allDay) {
			            endMarker = startOfDay(endMarker);
			        }
			        if (startMarker && endMarker <= startMarker) {
			            endMarker = null;
			        }
			    }
			    if (endMarker) {
			        hasEnd = true;
			    }
			    else if (!allowOpenRange) {
			        hasEnd = calendar.opt('forceEventDuration') || false;
			        endMarker = calendar.dateEnv.add(startMarker, allDay ?
			            calendar.defaultAllDayEventDuration :
			            calendar.defaultTimedEventDuration);
			    }
			    return {
			        allDay: allDay,
			        hasEnd: hasEnd,
			        range: { start: startMarker, end: endMarker },
			        forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
			        forcedEndTzo: endMeta ? endMeta.forcedTzo : null
			    };
			}
			function pluckDateProps(raw, leftovers) {
			    var props = refineProps(raw, DATE_PROPS, {}, leftovers);
			    props.start = (props.start !== null) ? props.start : props.date;
			    delete props.date;
			    return props;
			}
			function pluckNonDateProps(raw, calendar, leftovers) {
			    var preLeftovers = {};
			    var props = refineProps(raw, NON_DATE_PROPS, {}, preLeftovers);
			    var ui = processUnscopedUiProps(preLeftovers, calendar, leftovers);
			    props.publicId = props.id;
			    delete props.id;
			    props.ui = ui;
			    return props;
			}
			function computeIsAllDayDefault(sourceId, calendar) {
			    var res = null;
			    if (sourceId) {
			        var source = calendar.state.eventSources[sourceId];
			        res = source.allDayDefault;
			    }
			    if (res == null) {
			        res = calendar.opt('allDayDefault');
			    }
			    return res;
			}

			var DEF_DEFAULTS = {
			    startTime: '09:00',
			    endTime: '17:00',
			    daysOfWeek: [1, 2, 3, 4, 5],
			    rendering: 'inverse-background',
			    classNames: 'fc-nonbusiness',
			    groupId: '_businessHours' // so multiple defs get grouped
			};
			/*
			TODO: pass around as EventDefHash!!!
			*/
			function parseBusinessHours(input, calendar) {
			    return parseEvents(refineInputs(input), '', calendar);
			}
			function refineInputs(input) {
			    var rawDefs;
			    if (input === true) {
			        rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
			    }
			    else if (Array.isArray(input)) {
			        // if specifying an array, every sub-definition NEEDS a day-of-week
			        rawDefs = input.filter(function (rawDef) {
			            return rawDef.daysOfWeek;
			        });
			    }
			    else if (typeof input === 'object' && input) { // non-null object
			        rawDefs = [input];
			    }
			    else { // is probably false
			        rawDefs = [];
			    }
			    rawDefs = rawDefs.map(function (rawDef) {
			        return __assign({}, DEF_DEFAULTS, rawDef);
			    });
			    return rawDefs;
			}

			function memoizeRendering(renderFunc, unrenderFunc, dependencies) {
			    if (dependencies === void 0) { dependencies = []; }
			    var dependents = [];
			    var thisContext;
			    var prevArgs;
			    function unrender() {
			        if (prevArgs) {
			            for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
			                var dependent = dependents_1[_i];
			                dependent.unrender();
			            }
			            if (unrenderFunc) {
			                unrenderFunc.apply(thisContext, prevArgs);
			            }
			            prevArgs = null;
			        }
			    }
			    function res() {
			        if (!prevArgs || !isArraysEqual(prevArgs, arguments)) {
			            unrender();
			            thisContext = this;
			            prevArgs = arguments;
			            renderFunc.apply(this, arguments);
			        }
			    }
			    res.dependents = dependents;
			    res.unrender = unrender;
			    for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
			        var dependency = dependencies_1[_i];
			        dependency.dependents.push(res);
			    }
			    return res;
			}

			// Generates HTML for an anchor to another view into the calendar.
			// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
			// `gotoOptions` can either be a DateMarker, or an object with the form:
			// { date, type, forceOff }
			// `type` is a view-type like "day" or "week". default value is "day".
			// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
			function buildGotoAnchorHtml(allOptions, dateEnv, gotoOptions, attrs, innerHtml) {
			    var date;
			    var type;
			    var forceOff;
			    var finalOptions;
			    if (gotoOptions instanceof Date) {
			        date = gotoOptions; // a single date-like input
			    }
			    else {
			        date = gotoOptions.date;
			        type = gotoOptions.type;
			        forceOff = gotoOptions.forceOff;
			    }
			    finalOptions = {
			        date: dateEnv.formatIso(date, { omitTime: true }),
			        type: type || 'day'
			    };
			    if (typeof attrs === 'string') {
			        innerHtml = attrs;
			        attrs = null;
			    }
			    attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
			    innerHtml = innerHtml || '';
			    if (!forceOff && allOptions.navLinks) {
			        return '<a' + attrs +
			            ' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
			            innerHtml +
			            '</a>';
			    }
			    else {
			        return '<span' + attrs + '>' +
			            innerHtml +
			            '</span>';
			    }
			}
			// Computes HTML classNames for a single-day element
			function getDayClasses(date, dateProfile, context, noThemeHighlight) {
			    var calendar = context.calendar, options = context.options, theme = context.theme, dateEnv = context.dateEnv;
			    var classes = [];
			    var todayStart;
			    var todayEnd;
			    if (!rangeContainsMarker(dateProfile.activeRange, date)) {
			        classes.push('fc-disabled-day');
			    }
			    else {
			        classes.push('fc-' + DAY_IDS[date.getUTCDay()]);
			        if (options.monthMode &&
			            dateEnv.getMonth(date) !== dateEnv.getMonth(dateProfile.currentRange.start)) {
			            classes.push('fc-other-month');
			        }
			        todayStart = startOfDay(calendar.getNow());
			        todayEnd = addDays(todayStart, 1);
			        if (date < todayStart) {
			            classes.push('fc-past');
			        }
			        else if (date >= todayEnd) {
			            classes.push('fc-future');
			        }
			        else {
			            classes.push('fc-today');
			            if (noThemeHighlight !== true) {
			                classes.push(theme.getClass('today'));
			            }
			        }
			    }
			    return classes;
			}

			// given a function that resolves a result asynchronously.
			// the function can either call passed-in success and failure callbacks,
			// or it can return a promise.
			// if you need to pass additional params to func, bind them first.
			function unpromisify(func, success, failure) {
			    // guard against success/failure callbacks being called more than once
			    // and guard against a promise AND callback being used together.
			    var isResolved = false;
			    var wrappedSuccess = function () {
			        if (!isResolved) {
			            isResolved = true;
			            success.apply(this, arguments);
			        }
			    };
			    var wrappedFailure = function () {
			        if (!isResolved) {
			            isResolved = true;
			            if (failure) {
			                failure.apply(this, arguments);
			            }
			        }
			    };
			    var res = func(wrappedSuccess, wrappedFailure);
			    if (res && typeof res.then === 'function') {
			        res.then(wrappedSuccess, wrappedFailure);
			    }
			}

			var Mixin = /** @class */ (function () {
			    function Mixin() {
			    }
			    // mix into a CLASS
			    Mixin.mixInto = function (destClass) {
			        this.mixIntoObj(destClass.prototype);
			    };
			    // mix into ANY object
			    Mixin.mixIntoObj = function (destObj) {
			        var _this = this;
			        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
			            if (!destObj[name]) { // if destination doesn't already define it
			                destObj[name] = _this.prototype[name];
			            }
			        });
			    };
			    /*
			    will override existing methods
			    TODO: remove! not used anymore
			    */
			    Mixin.mixOver = function (destClass) {
			        var _this = this;
			        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
			            destClass.prototype[name] = _this.prototype[name];
			        });
			    };
			    return Mixin;
			}());

			/*
			USAGE:
			  import { default as EmitterMixin, EmitterInterface } from './EmitterMixin'
			in class:
			  on: EmitterInterface['on']
			  one: EmitterInterface['one']
			  off: EmitterInterface['off']
			  trigger: EmitterInterface['trigger']
			  triggerWith: EmitterInterface['triggerWith']
			  hasHandlers: EmitterInterface['hasHandlers']
			after class:
			  EmitterMixin.mixInto(TheClass)
			*/
			var EmitterMixin = /** @class */ (function (_super) {
			    __extends(EmitterMixin, _super);
			    function EmitterMixin() {
			        return _super !== null && _super.apply(this, arguments) || this;
			    }
			    EmitterMixin.prototype.on = function (type, handler) {
			        addToHash(this._handlers || (this._handlers = {}), type, handler);
			        return this; // for chaining
			    };
			    // todo: add comments
			    EmitterMixin.prototype.one = function (type, handler) {
			        addToHash(this._oneHandlers || (this._oneHandlers = {}), type, handler);
			        return this; // for chaining
			    };
			    EmitterMixin.prototype.off = function (type, handler) {
			        if (this._handlers) {
			            removeFromHash(this._handlers, type, handler);
			        }
			        if (this._oneHandlers) {
			            removeFromHash(this._oneHandlers, type, handler);
			        }
			        return this; // for chaining
			    };
			    EmitterMixin.prototype.trigger = function (type) {
			        var args = [];
			        for (var _i = 1; _i < arguments.length; _i++) {
			            args[_i - 1] = arguments[_i];
			        }
			        this.triggerWith(type, this, args);
			        return this; // for chaining
			    };
			    EmitterMixin.prototype.triggerWith = function (type, context, args) {
			        if (this._handlers) {
			            applyAll(this._handlers[type], context, args);
			        }
			        if (this._oneHandlers) {
			            applyAll(this._oneHandlers[type], context, args);
			            delete this._oneHandlers[type]; // will never fire again
			        }
			        return this; // for chaining
			    };
			    EmitterMixin.prototype.hasHandlers = function (type) {
			        return (this._handlers && this._handlers[type] && this._handlers[type].length) ||
			            (this._oneHandlers && this._oneHandlers[type] && this._oneHandlers[type].length);
			    };
			    return EmitterMixin;
			}(Mixin));
			function addToHash(hash, type, handler) {
			    (hash[type] || (hash[type] = []))
			        .push(handler);
			}
			function removeFromHash(hash, type, handler) {
			    if (handler) {
			        if (hash[type]) {
			            hash[type] = hash[type].filter(function (func) {
			                return func !== handler;
			            });
			        }
			    }
			    else {
			        delete hash[type]; // remove all handler funcs for this type
			    }
			}

			/*
			Records offset information for a set of elements, relative to an origin element.
			Can record the left/right OR the top/bottom OR both.
			Provides methods for querying the cache by position.
			*/
			var PositionCache = /** @class */ (function () {
			    function PositionCache(originEl, els, isHorizontal, isVertical) {
			        this.originEl = originEl;
			        this.els = els;
			        this.isHorizontal = isHorizontal;
			        this.isVertical = isVertical;
			    }
			    // Queries the els for coordinates and stores them.
			    // Call this method before using and of the get* methods below.
			    PositionCache.prototype.build = function () {
			        var originEl = this.originEl;
			        var originClientRect = this.originClientRect =
			            originEl.getBoundingClientRect(); // relative to viewport top-left
			        if (this.isHorizontal) {
			            this.buildElHorizontals(originClientRect.left);
			        }
			        if (this.isVertical) {
			            this.buildElVerticals(originClientRect.top);
			        }
			    };
			    // Populates the left/right internal coordinate arrays
			    PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
			        var lefts = [];
			        var rights = [];
			        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
			            var el = _a[_i];
			            var rect = el.getBoundingClientRect();
			            lefts.push(rect.left - originClientLeft);
			            rights.push(rect.right - originClientLeft);
			        }
			        this.lefts = lefts;
			        this.rights = rights;
			    };
			    // Populates the top/bottom internal coordinate arrays
			    PositionCache.prototype.buildElVerticals = function (originClientTop) {
			        var tops = [];
			        var bottoms = [];
			        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
			            var el = _a[_i];
			            var rect = el.getBoundingClientRect();
			            tops.push(rect.top - originClientTop);
			            bottoms.push(rect.bottom - originClientTop);
			        }
			        this.tops = tops;
			        this.bottoms = bottoms;
			    };
			    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
			    // If no intersection is made, returns undefined.
			    PositionCache.prototype.leftToIndex = function (leftPosition) {
			        var lefts = this.lefts;
			        var rights = this.rights;
			        var len = lefts.length;
			        var i;
			        for (i = 0; i < len; i++) {
			            if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
			                return i;
			            }
			        }
			    };
			    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
			    // If no intersection is made, returns undefined.
			    PositionCache.prototype.topToIndex = function (topPosition) {
			        var tops = this.tops;
			        var bottoms = this.bottoms;
			        var len = tops.length;
			        var i;
			        for (i = 0; i < len; i++) {
			            if (topPosition >= tops[i] && topPosition < bottoms[i]) {
			                return i;
			            }
			        }
			    };
			    // Gets the width of the element at the given index
			    PositionCache.prototype.getWidth = function (leftIndex) {
			        return this.rights[leftIndex] - this.lefts[leftIndex];
			    };
			    // Gets the height of the element at the given index
			    PositionCache.prototype.getHeight = function (topIndex) {
			        return this.bottoms[topIndex] - this.tops[topIndex];
			    };
			    return PositionCache;
			}());

			/*
			An object for getting/setting scroll-related information for an element.
			Internally, this is done very differently for window versus DOM element,
			so this object serves as a common interface.
			*/
			var ScrollController = /** @class */ (function () {
			    function ScrollController() {
			    }
			    ScrollController.prototype.getMaxScrollTop = function () {
			        return this.getScrollHeight() - this.getClientHeight();
			    };
			    ScrollController.prototype.getMaxScrollLeft = function () {
			        return this.getScrollWidth() - this.getClientWidth();
			    };
			    ScrollController.prototype.canScrollVertically = function () {
			        return this.getMaxScrollTop() > 0;
			    };
			    ScrollController.prototype.canScrollHorizontally = function () {
			        return this.getMaxScrollLeft() > 0;
			    };
			    ScrollController.prototype.canScrollUp = function () {
			        return this.getScrollTop() > 0;
			    };
			    ScrollController.prototype.canScrollDown = function () {
			        return this.getScrollTop() < this.getMaxScrollTop();
			    };
			    ScrollController.prototype.canScrollLeft = function () {
			        return this.getScrollLeft() > 0;
			    };
			    ScrollController.prototype.canScrollRight = function () {
			        return this.getScrollLeft() < this.getMaxScrollLeft();
			    };
			    return ScrollController;
			}());
			var ElementScrollController = /** @class */ (function (_super) {
			    __extends(ElementScrollController, _super);
			    function ElementScrollController(el) {
			        var _this = _super.call(this) || this;
			        _this.el = el;
			        return _this;
			    }
			    ElementScrollController.prototype.getScrollTop = function () {
			        return this.el.scrollTop;
			    };
			    ElementScrollController.prototype.getScrollLeft = function () {
			        return this.el.scrollLeft;
			    };
			    ElementScrollController.prototype.setScrollTop = function (top) {
			        this.el.scrollTop = top;
			    };
			    ElementScrollController.prototype.setScrollLeft = function (left) {
			        this.el.scrollLeft = left;
			    };
			    ElementScrollController.prototype.getScrollWidth = function () {
			        return this.el.scrollWidth;
			    };
			    ElementScrollController.prototype.getScrollHeight = function () {
			        return this.el.scrollHeight;
			    };
			    ElementScrollController.prototype.getClientHeight = function () {
			        return this.el.clientHeight;
			    };
			    ElementScrollController.prototype.getClientWidth = function () {
			        return this.el.clientWidth;
			    };
			    return ElementScrollController;
			}(ScrollController));
			var WindowScrollController = /** @class */ (function (_super) {
			    __extends(WindowScrollController, _super);
			    function WindowScrollController() {
			        return _super !== null && _super.apply(this, arguments) || this;
			    }
			    WindowScrollController.prototype.getScrollTop = function () {
			        return window.pageYOffset;
			    };
			    WindowScrollController.prototype.getScrollLeft = function () {
			        return window.pageXOffset;
			    };
			    WindowScrollController.prototype.setScrollTop = function (n) {
			        window.scroll(window.pageXOffset, n);
			    };
			    WindowScrollController.prototype.setScrollLeft = function (n) {
			        window.scroll(n, window.pageYOffset);
			    };
			    WindowScrollController.prototype.getScrollWidth = function () {
			        return document.documentElement.scrollWidth;
			    };
			    WindowScrollController.prototype.getScrollHeight = function () {
			        return document.documentElement.scrollHeight;
			    };
			    WindowScrollController.prototype.getClientHeight = function () {
			        return document.documentElement.clientHeight;
			    };
			    WindowScrollController.prototype.getClientWidth = function () {
			        return document.documentElement.clientWidth;
			    };
			    return WindowScrollController;
			}(ScrollController));

			/*
			Embodies a div that has potential scrollbars
			*/
			var ScrollComponent = /** @class */ (function (_super) {
			    __extends(ScrollComponent, _super);
			    function ScrollComponent(overflowX, overflowY) {
			        var _this = _super.call(this, createElement('div', {
			            className: 'fc-scroller'
			        })) || this;
			        _this.overflowX = overflowX;
			        _this.overflowY = overflowY;
			        _this.applyOverflow();
			        return _this;
			    }
			    // sets to natural height, unlocks overflow
			    ScrollComponent.prototype.clear = function () {
			        this.setHeight('auto');
			        this.applyOverflow();
			    };
			    ScrollComponent.prototype.destroy = function () {
			        removeElement(this.el);
			    };
			    // Overflow
			    // -----------------------------------------------------------------------------------------------------------------
			    ScrollComponent.prototype.applyOverflow = function () {
			        applyStyle(this.el, {
			            overflowX: this.overflowX,
			            overflowY: this.overflowY
			        });
			    };
			    // Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
			    // Useful for preserving scrollbar widths regardless of future resizes.
			    // Can pass in scrollbarWidths for optimization.
			    ScrollComponent.prototype.lockOverflow = function (scrollbarWidths) {
			        var overflowX = this.overflowX;
			        var overflowY = this.overflowY;
			        scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
			        if (overflowX === 'auto') {
			            overflowX = (scrollbarWidths.bottom || // horizontal scrollbars?
			                this.canScrollHorizontally() // OR scrolling pane with massless scrollbars?
			            ) ? 'scroll' : 'hidden';
			        }
			        if (overflowY === 'auto') {
			            overflowY = (scrollbarWidths.left || scrollbarWidths.right || // horizontal scrollbars?
			                this.canScrollVertically() // OR scrolling pane with massless scrollbars?
			            ) ? 'scroll' : 'hidden';
			        }
			        applyStyle(this.el, { overflowX: overflowX, overflowY: overflowY });
			    };
			    ScrollComponent.prototype.setHeight = function (height) {
			        applyStyleProp(this.el, 'height', height);
			    };
			    ScrollComponent.prototype.getScrollbarWidths = function () {
			        var edges = computeEdges(this.el);
			        return {
			            left: edges.scrollbarLeft,
			            right: edges.scrollbarRight,
			            bottom: edges.scrollbarBottom
			        };
			    };
			    return ScrollComponent;
			}(ElementScrollController));

			var Theme = /** @class */ (function () {
			    function Theme(calendarOptions) {
			        this.calendarOptions = calendarOptions;
			        this.processIconOverride();
			    }
			    Theme.prototype.processIconOverride = function () {
			        if (this.iconOverrideOption) {
			            this.setIconOverride(this.calendarOptions[this.iconOverrideOption]);
			        }
			    };
			    Theme.prototype.setIconOverride = function (iconOverrideHash) {
			        var iconClassesCopy;
			        var buttonName;
			        if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
			            iconClassesCopy = __assign({}, this.iconClasses);
			            for (buttonName in iconOverrideHash) {
			                iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
			            }
			            this.iconClasses = iconClassesCopy;
			        }
			        else if (iconOverrideHash === false) {
			            this.iconClasses = {};
			        }
			    };
			    Theme.prototype.applyIconOverridePrefix = function (className) {
			        var prefix = this.iconOverridePrefix;
			        if (prefix && className.indexOf(prefix) !== 0) { // if not already present
			            className = prefix + className;
			        }
			        return className;
			    };
			    Theme.prototype.getClass = function (key) {
			        return this.classes[key] || '';
			    };
			    Theme.prototype.getIconClass = function (buttonName) {
			        var className = this.iconClasses[buttonName];
			        if (className) {
			            return this.baseIconClass + ' ' + className;
			        }
			        return '';
			    };
			    Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
			        var className;
			        if (this.iconOverrideCustomButtonOption) {
			            className = customButtonProps[this.iconOverrideCustomButtonOption];
			            if (className) {
			                return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
			            }
			        }
			        return '';
			    };
			    return Theme;
			}());
			Theme.prototype.classes = {};
			Theme.prototype.iconClasses = {};
			Theme.prototype.baseIconClass = '';
			Theme.prototype.iconOverridePrefix = '';

			var guid = 0;
			var ComponentContext = /** @class */ (function () {
			    function ComponentContext(calendar, theme, dateEnv, options, view) {
			        this.calendar = calendar;
			        this.theme = theme;
			        this.dateEnv = dateEnv;
			        this.options = options;
			        this.view = view;
			        this.isRtl = options.dir === 'rtl';
			        this.eventOrderSpecs = parseFieldSpecs(options.eventOrder);
			        this.nextDayThreshold = createDuration(options.nextDayThreshold);
			    }
			    ComponentContext.prototype.extend = function (options, view) {
			        return new ComponentContext(this.calendar, this.theme, this.dateEnv, options || this.options, view || this.view);
			    };
			    return ComponentContext;
			}());
			var Component = /** @class */ (function () {
			    function Component() {
			        this.uid = String(guid++);
			    }
			    Component.addEqualityFuncs = function (newFuncs) {
			        this.prototype.equalityFuncs = __assign({}, this.prototype.equalityFuncs, newFuncs);
			    };
			    Component.prototype.receiveProps = function (props, context) {
			        var oldContext = this.context;
			        this.context = context;
			        if (!oldContext) {
			            this.firstContext(context);
			        }
			        var _a = recycleProps(this.props || {}, props, this.equalityFuncs), anyChanges = _a.anyChanges, comboProps = _a.comboProps;
			        this.props = comboProps;
			        if (anyChanges) {
			            if (oldContext) {
			                this.beforeUpdate();
			            }
			            this.render(comboProps, context);
			            if (oldContext) {
			                this.afterUpdate();
			            }
			        }
			    };
			    Component.prototype.render = function (props, context) {
			    };
			    Component.prototype.firstContext = function (context) {
			    };
			    Component.prototype.beforeUpdate = function () {
			    };
			    Component.prototype.afterUpdate = function () {
			    };
			    // after destroy is called, this component won't ever be used again
			    Component.prototype.destroy = function () {
			    };
			    return Component;
			}());
			Component.prototype.equalityFuncs = {};
			/*
			Reuses old values when equal. If anything is unequal, returns newProps as-is.
			Great for PureComponent, but won't be feasible with React, so just eliminate and use React's DOM diffing.
			*/
			function recycleProps(oldProps, newProps, equalityFuncs) {
			    var comboProps = {}; // some old, some new
			    var anyChanges = false;
			    for (var key in newProps) {
			        if (key in oldProps && (oldProps[key] === newProps[key] ||
			            (equalityFuncs[key] && equalityFuncs[key](oldProps[key], newProps[key])))) {
			            // equal to old? use old prop
			            comboProps[key] = oldProps[key];
			        }
			        else {
			            comboProps[key] = newProps[key];
			            anyChanges = true;
			        }
			    }
			    for (var key in oldProps) {
			        if (!(key in newProps)) {
			            anyChanges = true;
			            break;
			        }
			    }
			    return { anyChanges: anyChanges, comboProps: comboProps };
			}

			/*
			PURPOSES:
			- hook up to fg, fill, and mirror renderers
			- interface for dragging and hits
			*/
			var DateComponent = /** @class */ (function (_super) {
			    __extends(DateComponent, _super);
			    function DateComponent(el) {
			        var _this = _super.call(this) || this;
			        _this.el = el;
			        return _this;
			    }
			    DateComponent.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        removeElement(this.el);
			    };
			    // Hit System
			    // -----------------------------------------------------------------------------------------------------------------
			    DateComponent.prototype.buildPositionCaches = function () {
			    };
			    DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
			        return null; // this should be abstract
			    };
			    // Validation
			    // -----------------------------------------------------------------------------------------------------------------
			    DateComponent.prototype.isInteractionValid = function (interaction) {
			        var calendar = this.context.calendar;
			        var dateProfile = this.props.dateProfile; // HACK
			        var instances = interaction.mutatedEvents.instances;
			        if (dateProfile) { // HACK for DayTile
			            for (var instanceId in instances) {
			                if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
			                    return false;
			                }
			            }
			        }
			        return isInteractionValid(interaction, calendar);
			    };
			    DateComponent.prototype.isDateSelectionValid = function (selection) {
			        var calendar = this.context.calendar;
			        var dateProfile = this.props.dateProfile; // HACK
			        if (dateProfile && // HACK for DayTile
			            !rangeContainsRange(dateProfile.validRange, selection.range)) {
			            return false;
			        }
			        return isDateSelectionValid(selection, calendar);
			    };
			    // Pointer Interaction Utils
			    // -----------------------------------------------------------------------------------------------------------------
			    DateComponent.prototype.isValidSegDownEl = function (el) {
			        return !this.props.eventDrag && // HACK
			            !this.props.eventResize && // HACK
			            !elementClosest(el, '.fc-mirror') &&
			            (this.isPopover() || !this.isInPopover(el));
			        // ^above line ensures we don't detect a seg interaction within a nested component.
			        // it's a HACK because it only supports a popover as the nested component.
			    };
			    DateComponent.prototype.isValidDateDownEl = function (el) {
			        var segEl = elementClosest(el, this.fgSegSelector);
			        return (!segEl || segEl.classList.contains('fc-mirror')) &&
			            !elementClosest(el, '.fc-more') && // a "more.." link
			            !elementClosest(el, 'a[data-goto]') && // a clickable nav link
			            !this.isInPopover(el);
			    };
			    DateComponent.prototype.isPopover = function () {
			        return this.el.classList.contains('fc-popover');
			    };
			    DateComponent.prototype.isInPopover = function (el) {
			        return Boolean(elementClosest(el, '.fc-popover'));
			    };
			    return DateComponent;
			}(Component));
			DateComponent.prototype.fgSegSelector = '.fc-event-container > *';
			DateComponent.prototype.bgSegSelector = '.fc-bgevent:not(.fc-nonbusiness)';

			var uid$1 = 0;
			function createPlugin(input) {
			    return {
			        id: String(uid$1++),
			        deps: input.deps || [],
			        reducers: input.reducers || [],
			        eventDefParsers: input.eventDefParsers || [],
			        isDraggableTransformers: input.isDraggableTransformers || [],
			        eventDragMutationMassagers: input.eventDragMutationMassagers || [],
			        eventDefMutationAppliers: input.eventDefMutationAppliers || [],
			        dateSelectionTransformers: input.dateSelectionTransformers || [],
			        datePointTransforms: input.datePointTransforms || [],
			        dateSpanTransforms: input.dateSpanTransforms || [],
			        views: input.views || {},
			        viewPropsTransformers: input.viewPropsTransformers || [],
			        isPropsValid: input.isPropsValid || null,
			        externalDefTransforms: input.externalDefTransforms || [],
			        eventResizeJoinTransforms: input.eventResizeJoinTransforms || [],
			        viewContainerModifiers: input.viewContainerModifiers || [],
			        eventDropTransformers: input.eventDropTransformers || [],
			        componentInteractions: input.componentInteractions || [],
			        calendarInteractions: input.calendarInteractions || [],
			        themeClasses: input.themeClasses || {},
			        eventSourceDefs: input.eventSourceDefs || [],
			        cmdFormatter: input.cmdFormatter,
			        recurringTypes: input.recurringTypes || [],
			        namedTimeZonedImpl: input.namedTimeZonedImpl,
			        defaultView: input.defaultView || '',
			        elementDraggingImpl: input.elementDraggingImpl,
			        optionChangeHandlers: input.optionChangeHandlers || {}
			    };
			}
			var PluginSystem = /** @class */ (function () {
			    function PluginSystem() {
			        this.hooks = {
			            reducers: [],
			            eventDefParsers: [],
			            isDraggableTransformers: [],
			            eventDragMutationMassagers: [],
			            eventDefMutationAppliers: [],
			            dateSelectionTransformers: [],
			            datePointTransforms: [],
			            dateSpanTransforms: [],
			            views: {},
			            viewPropsTransformers: [],
			            isPropsValid: null,
			            externalDefTransforms: [],
			            eventResizeJoinTransforms: [],
			            viewContainerModifiers: [],
			            eventDropTransformers: [],
			            componentInteractions: [],
			            calendarInteractions: [],
			            themeClasses: {},
			            eventSourceDefs: [],
			            cmdFormatter: null,
			            recurringTypes: [],
			            namedTimeZonedImpl: null,
			            defaultView: '',
			            elementDraggingImpl: null,
			            optionChangeHandlers: {}
			        };
			        this.addedHash = {};
			    }
			    PluginSystem.prototype.add = function (plugin) {
			        if (!this.addedHash[plugin.id]) {
			            this.addedHash[plugin.id] = true;
			            for (var _i = 0, _a = plugin.deps; _i < _a.length; _i++) {
			                var dep = _a[_i];
			                this.add(dep);
			            }
			            this.hooks = combineHooks(this.hooks, plugin);
			        }
			    };
			    return PluginSystem;
			}());
			function combineHooks(hooks0, hooks1) {
			    return {
			        reducers: hooks0.reducers.concat(hooks1.reducers),
			        eventDefParsers: hooks0.eventDefParsers.concat(hooks1.eventDefParsers),
			        isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
			        eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
			        eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
			        dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
			        datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
			        dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
			        views: __assign({}, hooks0.views, hooks1.views),
			        viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
			        isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
			        externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
			        eventResizeJoinTransforms: hooks0.eventResizeJoinTransforms.concat(hooks1.eventResizeJoinTransforms),
			        viewContainerModifiers: hooks0.viewContainerModifiers.concat(hooks1.viewContainerModifiers),
			        eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
			        calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
			        componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
			        themeClasses: __assign({}, hooks0.themeClasses, hooks1.themeClasses),
			        eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
			        cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
			        recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
			        namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
			        defaultView: hooks0.defaultView || hooks1.defaultView,
			        elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
			        optionChangeHandlers: __assign({}, hooks0.optionChangeHandlers, hooks1.optionChangeHandlers)
			    };
			}

			var eventSourceDef = {
			    ignoreRange: true,
			    parseMeta: function (raw) {
			        if (Array.isArray(raw)) { // short form
			            return raw;
			        }
			        else if (Array.isArray(raw.events)) {
			            return raw.events;
			        }
			        return null;
			    },
			    fetch: function (arg, success) {
			        success({
			            rawEvents: arg.eventSource.meta
			        });
			    }
			};
			var ArrayEventSourcePlugin = createPlugin({
			    eventSourceDefs: [eventSourceDef]
			});

			var eventSourceDef$1 = {
			    parseMeta: function (raw) {
			        if (typeof raw === 'function') { // short form
			            return raw;
			        }
			        else if (typeof raw.events === 'function') {
			            return raw.events;
			        }
			        return null;
			    },
			    fetch: function (arg, success, failure) {
			        var dateEnv = arg.calendar.dateEnv;
			        var func = arg.eventSource.meta;
			        unpromisify(func.bind(null, {
			            start: dateEnv.toDate(arg.range.start),
			            end: dateEnv.toDate(arg.range.end),
			            startStr: dateEnv.formatIso(arg.range.start),
			            endStr: dateEnv.formatIso(arg.range.end),
			            timeZone: dateEnv.timeZone
			        }), function (rawEvents) {
			            success({ rawEvents: rawEvents }); // needs an object response
			        }, failure // send errorObj directly to failure callback
			        );
			    }
			};
			var FuncEventSourcePlugin = createPlugin({
			    eventSourceDefs: [eventSourceDef$1]
			});

			function requestJson(method, url, params, successCallback, failureCallback) {
			    method = method.toUpperCase();
			    var body = null;
			    if (method === 'GET') {
			        url = injectQueryStringParams(url, params);
			    }
			    else {
			        body = encodeParams(params);
			    }
			    var xhr = new XMLHttpRequest();
			    xhr.open(method, url, true);
			    if (method !== 'GET') {
			        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			    }
			    xhr.onload = function () {
			        if (xhr.status >= 200 && xhr.status < 400) {
			            try {
			                var res = JSON.parse(xhr.responseText);
			                successCallback(res, xhr);
			            }
			            catch (err) {
			                failureCallback('Failure parsing JSON', xhr);
			            }
			        }
			        else {
			            failureCallback('Request failed', xhr);
			        }
			    };
			    xhr.onerror = function () {
			        failureCallback('Request failed', xhr);
			    };
			    xhr.send(body);
			}
			function injectQueryStringParams(url, params) {
			    return url +
			        (url.indexOf('?') === -1 ? '?' : '&') +
			        encodeParams(params);
			}
			function encodeParams(params) {
			    var parts = [];
			    for (var key in params) {
			        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
			    }
			    return parts.join('&');
			}

			var eventSourceDef$2 = {
			    parseMeta: function (raw) {
			        if (typeof raw === 'string') { // short form
			            raw = { url: raw };
			        }
			        else if (!raw || typeof raw !== 'object' || !raw.url) {
			            return null;
			        }
			        return {
			            url: raw.url,
			            method: (raw.method || 'GET').toUpperCase(),
			            extraParams: raw.extraParams,
			            startParam: raw.startParam,
			            endParam: raw.endParam,
			            timeZoneParam: raw.timeZoneParam
			        };
			    },
			    fetch: function (arg, success, failure) {
			        var meta = arg.eventSource.meta;
			        var requestParams = buildRequestParams(meta, arg.range, arg.calendar);
			        requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
			            success({ rawEvents: rawEvents, xhr: xhr });
			        }, function (errorMessage, xhr) {
			            failure({ message: errorMessage, xhr: xhr });
			        });
			    }
			};
			var JsonFeedEventSourcePlugin = createPlugin({
			    eventSourceDefs: [eventSourceDef$2]
			});
			function buildRequestParams(meta, range, calendar) {
			    var dateEnv = calendar.dateEnv;
			    var startParam;
			    var endParam;
			    var timeZoneParam;
			    var customRequestParams;
			    var params = {};
			    startParam = meta.startParam;
			    if (startParam == null) {
			        startParam = calendar.opt('startParam');
			    }
			    endParam = meta.endParam;
			    if (endParam == null) {
			        endParam = calendar.opt('endParam');
			    }
			    timeZoneParam = meta.timeZoneParam;
			    if (timeZoneParam == null) {
			        timeZoneParam = calendar.opt('timeZoneParam');
			    }
			    // retrieve any outbound GET/POST data from the options
			    if (typeof meta.extraParams === 'function') {
			        // supplied as a function that returns a key/value object
			        customRequestParams = meta.extraParams();
			    }
			    else {
			        // probably supplied as a straight key/value object
			        customRequestParams = meta.extraParams || {};
			    }
			    __assign(params, customRequestParams);
			    params[startParam] = dateEnv.formatIso(range.start);
			    params[endParam] = dateEnv.formatIso(range.end);
			    if (dateEnv.timeZone !== 'local') {
			        params[timeZoneParam] = dateEnv.timeZone;
			    }
			    return params;
			}

			var recurring = {
			    parse: function (rawEvent, leftoverProps, dateEnv) {
			        var createMarker = dateEnv.createMarker.bind(dateEnv);
			        var processors = {
			            daysOfWeek: null,
			            startTime: createDuration,
			            endTime: createDuration,
			            startRecur: createMarker,
			            endRecur: createMarker
			        };
			        var props = refineProps(rawEvent, processors, {}, leftoverProps);
			        var anyValid = false;
			        for (var propName in props) {
			            if (props[propName] != null) {
			                anyValid = true;
			                break;
			            }
			        }
			        if (anyValid) {
			            var duration = null;
			            if ('duration' in leftoverProps) {
			                duration = createDuration(leftoverProps.duration);
			                delete leftoverProps.duration;
			            }
			            if (!duration && props.startTime && props.endTime) {
			                duration = subtractDurations(props.endTime, props.startTime);
			            }
			            return {
			                allDayGuess: Boolean(!props.startTime && !props.endTime),
			                duration: duration,
			                typeData: props // doesn't need endTime anymore but oh well
			            };
			        }
			        return null;
			    },
			    expand: function (typeData, framingRange, dateEnv) {
			        var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
			        if (clippedFramingRange) {
			            return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
			        }
			        else {
			            return [];
			        }
			    }
			};
			var SimpleRecurrencePlugin = createPlugin({
			    recurringTypes: [recurring]
			});
			function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
			    var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
			    var dayMarker = startOfDay(framingRange.start);
			    var endMarker = framingRange.end;
			    var instanceStarts = [];
			    while (dayMarker < endMarker) {
			        var instanceStart 
			        // if everyday, or this particular day-of-week
			        = void 0;
			        // if everyday, or this particular day-of-week
			        if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
			            if (startTime) {
			                instanceStart = dateEnv.add(dayMarker, startTime);
			            }
			            else {
			                instanceStart = dayMarker;
			            }
			            instanceStarts.push(instanceStart);
			        }
			        dayMarker = addDays(dayMarker, 1);
			    }
			    return instanceStarts;
			}

			var DefaultOptionChangeHandlers = createPlugin({
			    optionChangeHandlers: {
			        events: function (events, calendar, deepEqual) {
			            handleEventSources([events], calendar, deepEqual);
			        },
			        eventSources: handleEventSources,
			        plugins: handlePlugins
			    }
			});
			function handleEventSources(inputs, calendar, deepEqual) {
			    var unfoundSources = hashValuesToArray(calendar.state.eventSources);
			    var newInputs = [];
			    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
			        var input = inputs_1[_i];
			        var inputFound = false;
			        for (var i = 0; i < unfoundSources.length; i++) {
			            if (deepEqual(unfoundSources[i]._raw, input)) {
			                unfoundSources.splice(i, 1); // delete
			                inputFound = true;
			                break;
			            }
			        }
			        if (!inputFound) {
			            newInputs.push(input);
			        }
			    }
			    for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
			        var unfoundSource = unfoundSources_1[_a];
			        calendar.dispatch({
			            type: 'REMOVE_EVENT_SOURCE',
			            sourceId: unfoundSource.sourceId
			        });
			    }
			    for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
			        var newInput = newInputs_1[_b];
			        calendar.addEventSource(newInput);
			    }
			}
			// shortcoming: won't remove plugins
			function handlePlugins(inputs, calendar) {
			    calendar.addPluginInputs(inputs); // will gracefully handle duplicates
			}
			var globalDefaults = {
			    defaultRangeSeparator: ' - ',
			    titleRangeSeparator: ' \u2013 ',
			    defaultTimedEventDuration: '01:00:00',
			    defaultAllDayEventDuration: { day: 1 },
			    forceEventDuration: false,
			    nextDayThreshold: '00:00:00',
			    // display
			    columnHeader: true,
			    defaultView: '',
			    aspectRatio: 1.35,
			    header: {
			        left: 'title',
			        center: '',
			        right: 'today prev,next'
			    },
			    weekends: true,
			    weekNumbers: false,
			    weekNumberCalculation: 'local',
			    editable: false,
			    // nowIndicator: false,
			    scrollTime: '06:00:00',
			    minTime: '00:00:00',
			    maxTime: '24:00:00',
			    showNonCurrentDates: true,
			    // event ajax
			    lazyFetching: true,
			    startParam: 'start',
			    endParam: 'end',
			    timeZoneParam: 'timeZone',
			    timeZone: 'local',
			    // allDayDefault: undefined,
			    // locale
			    locales: [],
			    locale: '',
			    // dir: will get this from the default locale
			    // buttonIcons: null,
			    // allows setting a min-height to the event segment to prevent short events overlapping each other
			    timeGridEventMinHeight: 0,
			    themeSystem: 'standard',
			    // eventResizableFromStart: false,
			    dragRevertDuration: 500,
			    dragScroll: true,
			    allDayMaintainDuration: false,
			    // selectable: false,
			    unselectAuto: true,
			    // selectMinDistance: 0,
			    dropAccept: '*',
			    eventOrder: 'start,-duration,allDay,title',
			    // ^ if start tie, longer events go before shorter. final tie-breaker is title text
			    // rerenderDelay: null,
			    eventLimit: false,
			    eventLimitClick: 'popover',
			    dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
			    handleWindowResize: true,
			    windowResizeDelay: 100,
			    longPressDelay: 1000,
			    eventDragMinDistance: 5 // only applies to mouse
			};
			var rtlDefaults = {
			    header: {
			        left: 'next,prev today',
			        center: '',
			        right: 'title'
			    },
			    buttonIcons: {
			        // TODO: make RTL support the responibility of the theme
			        prev: 'fc-icon-chevron-right',
			        next: 'fc-icon-chevron-left',
			        prevYear: 'fc-icon-chevrons-right',
			        nextYear: 'fc-icon-chevrons-left'
			    }
			};
			var complexOptions = [
			    'header',
			    'footer',
			    'buttonText',
			    'buttonIcons'
			];
			// Merges an array of option objects into a single object
			function mergeOptions(optionObjs) {
			    return mergeProps(optionObjs, complexOptions);
			}
			// TODO: move this stuff to a "plugin"-related file...
			var INTERNAL_PLUGINS = [
			    ArrayEventSourcePlugin,
			    FuncEventSourcePlugin,
			    JsonFeedEventSourcePlugin,
			    SimpleRecurrencePlugin,
			    DefaultOptionChangeHandlers
			];
			function refinePluginDefs(pluginInputs) {
			    var plugins = [];
			    for (var _i = 0, pluginInputs_1 = pluginInputs; _i < pluginInputs_1.length; _i++) {
			        var pluginInput = pluginInputs_1[_i];
			        if (typeof pluginInput === 'string') {
			            var globalName = 'FullCalendar' + capitaliseFirstLetter(pluginInput);
			            if (!window[globalName]) {
			                console.warn('Plugin file not loaded for ' + pluginInput);
			            }
			            else {
			                plugins.push(window[globalName].default); // is an ES6 module
			            }
			        }
			        else {
			            plugins.push(pluginInput);
			        }
			    }
			    return INTERNAL_PLUGINS.concat(plugins);
			}

			var RAW_EN_LOCALE = {
			    code: 'en',
			    week: {
			        dow: 0,
			        doy: 4 // 4 days need to be within the year to be considered the first week
			    },
			    dir: 'ltr',
			    buttonText: {
			        prev: 'prev',
			        next: 'next',
			        prevYear: 'prev year',
			        nextYear: 'next year',
			        year: 'year',
			        today: 'today',
			        month: 'month',
			        week: 'week',
			        day: 'day',
			        list: 'list'
			    },
			    weekLabel: 'W',
			    allDayText: 'all-day',
			    eventLimitText: 'more',
			    noEventsMessage: 'No events to display'
			};
			function parseRawLocales(explicitRawLocales) {
			    var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
			    var globalArray = window['FullCalendarLocalesAll'] || []; // from locales-all.js
			    var globalObject = window['FullCalendarLocales'] || {}; // from locales/*.js. keys are meaningless
			    var allRawLocales = globalArray.concat(// globalArray is low prio
			    hashValuesToArray(globalObject), // medium prio
			    explicitRawLocales // highest prio
			    );
			    var rawLocaleMap = {
			        en: RAW_EN_LOCALE // necessary?
			    };
			    for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
			        var rawLocale = allRawLocales_1[_i];
			        rawLocaleMap[rawLocale.code] = rawLocale;
			    }
			    return {
			        map: rawLocaleMap,
			        defaultCode: defaultCode
			    };
			}
			function buildLocale(inputSingular, available) {
			    if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
			        return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
			    }
			    else {
			        return queryLocale(inputSingular, available);
			    }
			}
			function queryLocale(codeArg, available) {
			    var codes = [].concat(codeArg || []); // will convert to array
			    var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
			    return parseLocale(codeArg, codes, raw);
			}
			function queryRawLocale(codes, available) {
			    for (var i = 0; i < codes.length; i++) {
			        var parts = codes[i].toLocaleLowerCase().split('-');
			        for (var j = parts.length; j > 0; j--) {
			            var simpleId = parts.slice(0, j).join('-');
			            if (available[simpleId]) {
			                return available[simpleId];
			            }
			        }
			    }
			    return null;
			}
			function parseLocale(codeArg, codes, raw) {
			    var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
			    delete merged.code; // don't want this part of the options
			    var week = merged.week;
			    delete merged.week;
			    return {
			        codeArg: codeArg,
			        codes: codes,
			        week: week,
			        simpleNumberFormat: new Intl.NumberFormat(codeArg),
			        options: merged
			    };
			}

			var OptionsManager = /** @class */ (function () {
			    function OptionsManager(overrides) {
			        this.overrides = __assign({}, overrides); // make a copy
			        this.dynamicOverrides = {};
			        this.compute();
			    }
			    OptionsManager.prototype.mutate = function (updates, removals, isDynamic) {
			        if (!Object.keys(updates).length && !removals.length) {
			            return;
			        }
			        var overrideHash = isDynamic ? this.dynamicOverrides : this.overrides;
			        __assign(overrideHash, updates);
			        for (var _i = 0, removals_1 = removals; _i < removals_1.length; _i++) {
			            var propName = removals_1[_i];
			            delete overrideHash[propName];
			        }
			        this.compute();
			    };
			    // Computes the flattened options hash for the calendar and assigns to `this.options`.
			    // Assumes this.overrides and this.dynamicOverrides have already been initialized.
			    OptionsManager.prototype.compute = function () {
			        // TODO: not a very efficient system
			        var locales = firstDefined(// explicit locale option given?
			        this.dynamicOverrides.locales, this.overrides.locales, globalDefaults.locales);
			        var locale = firstDefined(// explicit locales option given?
			        this.dynamicOverrides.locale, this.overrides.locale, globalDefaults.locale);
			        var available = parseRawLocales(locales);
			        var localeDefaults = buildLocale(locale || available.defaultCode, available.map).options;
			        var dir = firstDefined(// based on options computed so far, is direction RTL?
			        this.dynamicOverrides.dir, this.overrides.dir, localeDefaults.dir);
			        var dirDefaults = dir === 'rtl' ? rtlDefaults : {};
			        this.dirDefaults = dirDefaults;
			        this.localeDefaults = localeDefaults;
			        this.computed = mergeOptions([
			            globalDefaults,
			            dirDefaults,
			            localeDefaults,
			            this.overrides,
			            this.dynamicOverrides
			        ]);
			    };
			    return OptionsManager;
			}());

			var calendarSystemClassMap = {};
			function registerCalendarSystem(name, theClass) {
			    calendarSystemClassMap[name] = theClass;
			}
			function createCalendarSystem(name) {
			    return new calendarSystemClassMap[name]();
			}
			var GregorianCalendarSystem = /** @class */ (function () {
			    function GregorianCalendarSystem() {
			    }
			    GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
			        return d.getUTCFullYear();
			    };
			    GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
			        return d.getUTCMonth();
			    };
			    GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
			        return d.getUTCDate();
			    };
			    GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
			        return arrayToUtcDate(arr);
			    };
			    GregorianCalendarSystem.prototype.markerToArray = function (marker) {
			        return dateToUtcArray(marker);
			    };
			    return GregorianCalendarSystem;
			}());
			registerCalendarSystem('gregory', GregorianCalendarSystem);

			var ISO_RE = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
			function parse(str) {
			    var m = ISO_RE.exec(str);
			    if (m) {
			        var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number('0.' + m[12]) * 1000 : 0));
			        if (isValidDate(marker)) {
			            var timeZoneOffset = null;
			            if (m[13]) {
			                timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
			                    Number(m[18] || 0));
			            }
			            return {
			                marker: marker,
			                isTimeUnspecified: !m[6],
			                timeZoneOffset: timeZoneOffset
			            };
			        }
			    }
			    return null;
			}

			var DateEnv = /** @class */ (function () {
			    function DateEnv(settings) {
			        var timeZone = this.timeZone = settings.timeZone;
			        var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
			        if (settings.namedTimeZoneImpl && isNamedTimeZone) {
			            this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
			        }
			        this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
			        this.calendarSystem = createCalendarSystem(settings.calendarSystem);
			        this.locale = settings.locale;
			        this.weekDow = settings.locale.week.dow;
			        this.weekDoy = settings.locale.week.doy;
			        if (settings.weekNumberCalculation === 'ISO') {
			            this.weekDow = 1;
			            this.weekDoy = 4;
			        }
			        if (typeof settings.firstDay === 'number') {
			            this.weekDow = settings.firstDay;
			        }
			        if (typeof settings.weekNumberCalculation === 'function') {
			            this.weekNumberFunc = settings.weekNumberCalculation;
			        }
			        this.weekLabel = settings.weekLabel != null ? settings.weekLabel : settings.locale.options.weekLabel;
			        this.cmdFormatter = settings.cmdFormatter;
			    }
			    // Creating / Parsing
			    DateEnv.prototype.createMarker = function (input) {
			        var meta = this.createMarkerMeta(input);
			        if (meta === null) {
			            return null;
			        }
			        return meta.marker;
			    };
			    DateEnv.prototype.createNowMarker = function () {
			        if (this.canComputeOffset) {
			            return this.timestampToMarker(new Date().valueOf());
			        }
			        else {
			            // if we can't compute the current date val for a timezone,
			            // better to give the current local date vals than UTC
			            return arrayToUtcDate(dateToLocalArray(new Date()));
			        }
			    };
			    DateEnv.prototype.createMarkerMeta = function (input) {
			        if (typeof input === 'string') {
			            return this.parse(input);
			        }
			        var marker = null;
			        if (typeof input === 'number') {
			            marker = this.timestampToMarker(input);
			        }
			        else if (input instanceof Date) {
			            input = input.valueOf();
			            if (!isNaN(input)) {
			                marker = this.timestampToMarker(input);
			            }
			        }
			        else if (Array.isArray(input)) {
			            marker = arrayToUtcDate(input);
			        }
			        if (marker === null || !isValidDate(marker)) {
			            return null;
			        }
			        return { marker: marker, isTimeUnspecified: false, forcedTzo: null };
			    };
			    DateEnv.prototype.parse = function (s) {
			        var parts = parse(s);
			        if (parts === null) {
			            return null;
			        }
			        var marker = parts.marker;
			        var forcedTzo = null;
			        if (parts.timeZoneOffset !== null) {
			            if (this.canComputeOffset) {
			                marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
			            }
			            else {
			                forcedTzo = parts.timeZoneOffset;
			            }
			        }
			        return { marker: marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo: forcedTzo };
			    };
			    // Accessors
			    DateEnv.prototype.getYear = function (marker) {
			        return this.calendarSystem.getMarkerYear(marker);
			    };
			    DateEnv.prototype.getMonth = function (marker) {
			        return this.calendarSystem.getMarkerMonth(marker);
			    };
			    // Adding / Subtracting
			    DateEnv.prototype.add = function (marker, dur) {
			        var a = this.calendarSystem.markerToArray(marker);
			        a[0] += dur.years;
			        a[1] += dur.months;
			        a[2] += dur.days;
			        a[6] += dur.milliseconds;
			        return this.calendarSystem.arrayToMarker(a);
			    };
			    DateEnv.prototype.subtract = function (marker, dur) {
			        var a = this.calendarSystem.markerToArray(marker);
			        a[0] -= dur.years;
			        a[1] -= dur.months;
			        a[2] -= dur.days;
			        a[6] -= dur.milliseconds;
			        return this.calendarSystem.arrayToMarker(a);
			    };
			    DateEnv.prototype.addYears = function (marker, n) {
			        var a = this.calendarSystem.markerToArray(marker);
			        a[0] += n;
			        return this.calendarSystem.arrayToMarker(a);
			    };
			    DateEnv.prototype.addMonths = function (marker, n) {
			        var a = this.calendarSystem.markerToArray(marker);
			        a[1] += n;
			        return this.calendarSystem.arrayToMarker(a);
			    };
			    // Diffing Whole Units
			    DateEnv.prototype.diffWholeYears = function (m0, m1) {
			        var calendarSystem = this.calendarSystem;
			        if (timeAsMs(m0) === timeAsMs(m1) &&
			            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
			            calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
			            return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
			        }
			        return null;
			    };
			    DateEnv.prototype.diffWholeMonths = function (m0, m1) {
			        var calendarSystem = this.calendarSystem;
			        if (timeAsMs(m0) === timeAsMs(m1) &&
			            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
			            return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
			                (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
			        }
			        return null;
			    };
			    // Range / Duration
			    DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
			        var n = this.diffWholeYears(m0, m1);
			        if (n !== null) {
			            return { unit: 'year', value: n };
			        }
			        n = this.diffWholeMonths(m0, m1);
			        if (n !== null) {
			            return { unit: 'month', value: n };
			        }
			        n = diffWholeWeeks(m0, m1);
			        if (n !== null) {
			            return { unit: 'week', value: n };
			        }
			        n = diffWholeDays(m0, m1);
			        if (n !== null) {
			            return { unit: 'day', value: n };
			        }
			        n = diffHours(m0, m1);
			        if (isInt(n)) {
			            return { unit: 'hour', value: n };
			        }
			        n = diffMinutes(m0, m1);
			        if (isInt(n)) {
			            return { unit: 'minute', value: n };
			        }
			        n = diffSeconds(m0, m1);
			        if (isInt(n)) {
			            return { unit: 'second', value: n };
			        }
			        return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
			    };
			    DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
			        // TODO: can use greatestWholeUnit
			        var diff;
			        if (d.years) {
			            diff = this.diffWholeYears(m0, m1);
			            if (diff !== null) {
			                return diff / asRoughYears(d);
			            }
			        }
			        if (d.months) {
			            diff = this.diffWholeMonths(m0, m1);
			            if (diff !== null) {
			                return diff / asRoughMonths(d);
			            }
			        }
			        if (d.days) {
			            diff = diffWholeDays(m0, m1);
			            if (diff !== null) {
			                return diff / asRoughDays(d);
			            }
			        }
			        return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
			    };
			    // Start-Of
			    DateEnv.prototype.startOf = function (m, unit) {
			        if (unit === 'year') {
			            return this.startOfYear(m);
			        }
			        else if (unit === 'month') {
			            return this.startOfMonth(m);
			        }
			        else if (unit === 'week') {
			            return this.startOfWeek(m);
			        }
			        else if (unit === 'day') {
			            return startOfDay(m);
			        }
			        else if (unit === 'hour') {
			            return startOfHour(m);
			        }
			        else if (unit === 'minute') {
			            return startOfMinute(m);
			        }
			        else if (unit === 'second') {
			            return startOfSecond(m);
			        }
			    };
			    DateEnv.prototype.startOfYear = function (m) {
			        return this.calendarSystem.arrayToMarker([
			            this.calendarSystem.getMarkerYear(m)
			        ]);
			    };
			    DateEnv.prototype.startOfMonth = function (m) {
			        return this.calendarSystem.arrayToMarker([
			            this.calendarSystem.getMarkerYear(m),
			            this.calendarSystem.getMarkerMonth(m)
			        ]);
			    };
			    DateEnv.prototype.startOfWeek = function (m) {
			        return this.calendarSystem.arrayToMarker([
			            this.calendarSystem.getMarkerYear(m),
			            this.calendarSystem.getMarkerMonth(m),
			            m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7)
			        ]);
			    };
			    // Week Number
			    DateEnv.prototype.computeWeekNumber = function (marker) {
			        if (this.weekNumberFunc) {
			            return this.weekNumberFunc(this.toDate(marker));
			        }
			        else {
			            return weekOfYear(marker, this.weekDow, this.weekDoy);
			        }
			    };
			    // TODO: choke on timeZoneName: long
			    DateEnv.prototype.format = function (marker, formatter, dateOptions) {
			        if (dateOptions === void 0) { dateOptions = {}; }
			        return formatter.format({
			            marker: marker,
			            timeZoneOffset: dateOptions.forcedTzo != null ?
			                dateOptions.forcedTzo :
			                this.offsetForMarker(marker)
			        }, this);
			    };
			    DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
			        if (dateOptions === void 0) { dateOptions = {}; }
			        if (dateOptions.isEndExclusive) {
			            end = addMs(end, -1);
			        }
			        return formatter.formatRange({
			            marker: start,
			            timeZoneOffset: dateOptions.forcedStartTzo != null ?
			                dateOptions.forcedStartTzo :
			                this.offsetForMarker(start)
			        }, {
			            marker: end,
			            timeZoneOffset: dateOptions.forcedEndTzo != null ?
			                dateOptions.forcedEndTzo :
			                this.offsetForMarker(end)
			        }, this);
			    };
			    DateEnv.prototype.formatIso = function (marker, extraOptions) {
			        if (extraOptions === void 0) { extraOptions = {}; }
			        var timeZoneOffset = null;
			        if (!extraOptions.omitTimeZoneOffset) {
			            if (extraOptions.forcedTzo != null) {
			                timeZoneOffset = extraOptions.forcedTzo;
			            }
			            else {
			                timeZoneOffset = this.offsetForMarker(marker);
			            }
			        }
			        return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
			    };
			    // TimeZone
			    DateEnv.prototype.timestampToMarker = function (ms) {
			        if (this.timeZone === 'local') {
			            return arrayToUtcDate(dateToLocalArray(new Date(ms)));
			        }
			        else if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
			            return new Date(ms);
			        }
			        else {
			            return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
			        }
			    };
			    DateEnv.prototype.offsetForMarker = function (m) {
			        if (this.timeZone === 'local') {
			            return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
			        }
			        else if (this.timeZone === 'UTC') {
			            return 0;
			        }
			        else if (this.namedTimeZoneImpl) {
			            return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
			        }
			        return null;
			    };
			    // Conversion
			    DateEnv.prototype.toDate = function (m, forcedTzo) {
			        if (this.timeZone === 'local') {
			            return arrayToLocalDate(dateToUtcArray(m));
			        }
			        else if (this.timeZone === 'UTC') {
			            return new Date(m.valueOf()); // make sure it's a copy
			        }
			        else if (!this.namedTimeZoneImpl) {
			            return new Date(m.valueOf() - (forcedTzo || 0));
			        }
			        else {
			            return new Date(m.valueOf() -
			                this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60 // convert minutes -> ms
			            );
			        }
			    };
			    return DateEnv;
			}());

			var SIMPLE_SOURCE_PROPS = {
			    id: String,
			    allDayDefault: Boolean,
			    eventDataTransform: Function,
			    success: Function,
			    failure: Function
			};
			var uid$2 = 0;
			function doesSourceNeedRange(eventSource, calendar) {
			    var defs = calendar.pluginSystem.hooks.eventSourceDefs;
			    return !defs[eventSource.sourceDefId].ignoreRange;
			}
			function parseEventSource(raw, calendar) {
			    var defs = calendar.pluginSystem.hooks.eventSourceDefs;
			    for (var i = defs.length - 1; i >= 0; i--) { // later-added plugins take precedence
			        var def = defs[i];
			        var meta = def.parseMeta(raw);
			        if (meta) {
			            var res = parseEventSourceProps(typeof raw === 'object' ? raw : {}, meta, i, calendar);
			            res._raw = raw;
			            return res;
			        }
			    }
			    return null;
			}
			function parseEventSourceProps(raw, meta, sourceDefId, calendar) {
			    var leftovers0 = {};
			    var props = refineProps(raw, SIMPLE_SOURCE_PROPS, {}, leftovers0);
			    var leftovers1 = {};
			    var ui = processUnscopedUiProps(leftovers0, calendar, leftovers1);
			    props.isFetching = false;
			    props.latestFetchId = '';
			    props.fetchRange = null;
			    props.publicId = String(raw.id || '');
			    props.sourceId = String(uid$2++);
			    props.sourceDefId = sourceDefId;
			    props.meta = meta;
			    props.ui = ui;
			    props.extendedProps = leftovers1;
			    return props;
			}

			function reduceEventSources (eventSources, action, dateProfile, calendar) {
			    switch (action.type) {
			        case 'ADD_EVENT_SOURCES': // already parsed
			            return addSources(eventSources, action.sources, dateProfile ? dateProfile.activeRange : null, calendar);
			        case 'REMOVE_EVENT_SOURCE':
			            return removeSource(eventSources, action.sourceId);
			        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
			        case 'NEXT':
			        case 'SET_DATE':
			        case 'SET_VIEW_TYPE':
			            if (dateProfile) {
			                return fetchDirtySources(eventSources, dateProfile.activeRange, calendar);
			            }
			            else {
			                return eventSources;
			            }
			        case 'FETCH_EVENT_SOURCES':
			        case 'CHANGE_TIMEZONE':
			            return fetchSourcesByIds(eventSources, action.sourceIds ?
			                arrayToHash(action.sourceIds) :
			                excludeStaticSources(eventSources, calendar), dateProfile ? dateProfile.activeRange : null, calendar);
			        case 'RECEIVE_EVENTS':
			        case 'RECEIVE_EVENT_ERROR':
			            return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
			        case 'REMOVE_ALL_EVENT_SOURCES':
			            return {};
			        default:
			            return eventSources;
			    }
			}
			var uid$3 = 0;
			function addSources(eventSourceHash, sources, fetchRange, calendar) {
			    var hash = {};
			    for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
			        var source = sources_1[_i];
			        hash[source.sourceId] = source;
			    }
			    if (fetchRange) {
			        hash = fetchDirtySources(hash, fetchRange, calendar);
			    }
			    return __assign({}, eventSourceHash, hash);
			}
			function removeSource(eventSourceHash, sourceId) {
			    return filterHash(eventSourceHash, function (eventSource) {
			        return eventSource.sourceId !== sourceId;
			    });
			}
			function fetchDirtySources(sourceHash, fetchRange, calendar) {
			    return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
			        return isSourceDirty(eventSource, fetchRange, calendar);
			    }), fetchRange, calendar);
			}
			function isSourceDirty(eventSource, fetchRange, calendar) {
			    if (!doesSourceNeedRange(eventSource, calendar)) {
			        return !eventSource.latestFetchId;
			    }
			    else {
			        return !calendar.opt('lazyFetching') ||
			            !eventSource.fetchRange ||
			            eventSource.isFetching || // always cancel outdated in-progress fetches
			            fetchRange.start < eventSource.fetchRange.start ||
			            fetchRange.end > eventSource.fetchRange.end;
			    }
			}
			function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, calendar) {
			    var nextSources = {};
			    for (var sourceId in prevSources) {
			        var source = prevSources[sourceId];
			        if (sourceIdHash[sourceId]) {
			            nextSources[sourceId] = fetchSource(source, fetchRange, calendar);
			        }
			        else {
			            nextSources[sourceId] = source;
			        }
			    }
			    return nextSources;
			}
			function fetchSource(eventSource, fetchRange, calendar) {
			    var sourceDef = calendar.pluginSystem.hooks.eventSourceDefs[eventSource.sourceDefId];
			    var fetchId = String(uid$3++);
			    sourceDef.fetch({
			        eventSource: eventSource,
			        calendar: calendar,
			        range: fetchRange
			    }, function (res) {
			        var rawEvents = res.rawEvents;
			        var calSuccess = calendar.opt('eventSourceSuccess');
			        var calSuccessRes;
			        var sourceSuccessRes;
			        if (eventSource.success) {
			            sourceSuccessRes = eventSource.success(rawEvents, res.xhr);
			        }
			        if (calSuccess) {
			            calSuccessRes = calSuccess(rawEvents, res.xhr);
			        }
			        rawEvents = sourceSuccessRes || calSuccessRes || rawEvents;
			        calendar.dispatch({
			            type: 'RECEIVE_EVENTS',
			            sourceId: eventSource.sourceId,
			            fetchId: fetchId,
			            fetchRange: fetchRange,
			            rawEvents: rawEvents
			        });
			    }, function (error) {
			        var callFailure = calendar.opt('eventSourceFailure');
			        console.warn(error.message, error);
			        if (eventSource.failure) {
			            eventSource.failure(error);
			        }
			        if (callFailure) {
			            callFailure(error);
			        }
			        calendar.dispatch({
			            type: 'RECEIVE_EVENT_ERROR',
			            sourceId: eventSource.sourceId,
			            fetchId: fetchId,
			            fetchRange: fetchRange,
			            error: error
			        });
			    });
			    return __assign({}, eventSource, { isFetching: true, latestFetchId: fetchId });
			}
			function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
			    var _a;
			    var eventSource = sourceHash[sourceId];
			    if (eventSource && // not already removed
			        fetchId === eventSource.latestFetchId) {
			        return __assign({}, sourceHash, (_a = {}, _a[sourceId] = __assign({}, eventSource, { isFetching: false, fetchRange: fetchRange // also serves as a marker that at least one fetch has completed
			         }), _a));
			    }
			    return sourceHash;
			}
			function excludeStaticSources(eventSources, calendar) {
			    return filterHash(eventSources, function (eventSource) {
			        return doesSourceNeedRange(eventSource, calendar);
			    });
			}

			var DateProfileGenerator = /** @class */ (function () {
			    function DateProfileGenerator(viewSpec, calendar) {
			        this.viewSpec = viewSpec;
			        this.options = viewSpec.options;
			        this.dateEnv = calendar.dateEnv;
			        this.calendar = calendar;
			        this.initHiddenDays();
			    }
			    /* Date Range Computation
			    ------------------------------------------------------------------------------------------------------------------*/
			    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
			    DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate) {
			        var dateEnv = this.dateEnv;
			        var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
			        currentDateProfile.dateIncrement);
			        return this.build(prevDate, -1);
			    };
			    // Builds a structure with info about what the dates/ranges will be for the "next" view.
			    DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate) {
			        var dateEnv = this.dateEnv;
			        var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
			        currentDateProfile.dateIncrement);
			        return this.build(nextDate, 1);
			    };
			    // Builds a structure holding dates/ranges for rendering around the given date.
			    // Optional direction param indicates whether the date is being incremented/decremented
			    // from its previous value. decremented = -1, incremented = 1 (default).
			    DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
			        if (forceToValid === void 0) { forceToValid = false; }
			        var validRange;
			        var minTime = null;
			        var maxTime = null;
			        var currentInfo;
			        var isRangeAllDay;
			        var renderRange;
			        var activeRange;
			        var isValid;
			        validRange = this.buildValidRange();
			        validRange = this.trimHiddenDays(validRange);
			        if (forceToValid) {
			            currentDate = constrainMarkerToRange(currentDate, validRange);
			        }
			        currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
			        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
			        renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
			        renderRange = this.trimHiddenDays(renderRange);
			        activeRange = renderRange;
			        if (!this.options.showNonCurrentDates) {
			            activeRange = intersectRanges(activeRange, currentInfo.range);
			        }
			        minTime = createDuration(this.options.minTime);
			        maxTime = createDuration(this.options.maxTime);
			        activeRange = this.adjustActiveRange(activeRange, minTime, maxTime);
			        activeRange = intersectRanges(activeRange, validRange); // might return null
			        // it's invalid if the originally requested date is not contained,
			        // or if the range is completely outside of the valid range.
			        isValid = rangesIntersect(currentInfo.range, validRange);
			        return {
			            // constraint for where prev/next operations can go and where events can be dragged/resized to.
			            // an object with optional start and end properties.
			            validRange: validRange,
			            // range the view is formally responsible for.
			            // for example, a month view might have 1st-31st, excluding padded dates
			            currentRange: currentInfo.range,
			            // name of largest unit being displayed, like "month" or "week"
			            currentRangeUnit: currentInfo.unit,
			            isRangeAllDay: isRangeAllDay,
			            // dates that display events and accept drag-n-drop
			            // will be `null` if no dates accept events
			            activeRange: activeRange,
			            // date range with a rendered skeleton
			            // includes not-active days that need some sort of DOM
			            renderRange: renderRange,
			            // Duration object that denotes the first visible time of any given day
			            minTime: minTime,
			            // Duration object that denotes the exclusive visible end time of any given day
			            maxTime: maxTime,
			            isValid: isValid,
			            // how far the current date will move for a prev/next operation
			            dateIncrement: this.buildDateIncrement(currentInfo.duration)
			            // pass a fallback (might be null) ^
			        };
			    };
			    // Builds an object with optional start/end properties.
			    // Indicates the minimum/maximum dates to display.
			    // not responsible for trimming hidden days.
			    DateProfileGenerator.prototype.buildValidRange = function () {
			        return this.getRangeOption('validRange', this.calendar.getNow()) ||
			            { start: null, end: null }; // completely open-ended
			    };
			    // Builds a structure with info about the "current" range, the range that is
			    // highlighted as being the current month for example.
			    // See build() for a description of `direction`.
			    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
			    DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
			        var _a = this, viewSpec = _a.viewSpec, dateEnv = _a.dateEnv;
			        var duration = null;
			        var unit = null;
			        var range = null;
			        var dayCount;
			        if (viewSpec.duration) {
			            duration = viewSpec.duration;
			            unit = viewSpec.durationUnit;
			            range = this.buildRangeFromDuration(date, direction, duration, unit);
			        }
			        else if ((dayCount = this.options.dayCount)) {
			            unit = 'day';
			            range = this.buildRangeFromDayCount(date, direction, dayCount);
			        }
			        else if ((range = this.buildCustomVisibleRange(date))) {
			            unit = dateEnv.greatestWholeUnit(range.start, range.end).unit;
			        }
			        else {
			            duration = this.getFallbackDuration();
			            unit = greatestDurationDenominator(duration).unit;
			            range = this.buildRangeFromDuration(date, direction, duration, unit);
			        }
			        return { duration: duration, unit: unit, range: range };
			    };
			    DateProfileGenerator.prototype.getFallbackDuration = function () {
			        return createDuration({ day: 1 });
			    };
			    // Returns a new activeRange to have time values (un-ambiguate)
			    // minTime or maxTime causes the range to expand.
			    DateProfileGenerator.prototype.adjustActiveRange = function (range, minTime, maxTime) {
			        var dateEnv = this.dateEnv;
			        var start = range.start;
			        var end = range.end;
			        if (this.viewSpec.class.prototype.usesMinMaxTime) {
			            // expand active range if minTime is negative (why not when positive?)
			            if (asRoughDays(minTime) < 0) {
			                start = startOfDay(start); // necessary?
			                start = dateEnv.add(start, minTime);
			            }
			            // expand active range if maxTime is beyond one day (why not when positive?)
			            if (asRoughDays(maxTime) > 1) {
			                end = startOfDay(end); // necessary?
			                end = addDays(end, -1);
			                end = dateEnv.add(end, maxTime);
			            }
			        }
			        return { start: start, end: end };
			    };
			    // Builds the "current" range when it is specified as an explicit duration.
			    // `unit` is the already-computed greatestDurationDenominator unit of duration.
			    DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
			        var dateEnv = this.dateEnv;
			        var alignment = this.options.dateAlignment;
			        var dateIncrementInput;
			        var dateIncrementDuration;
			        var start;
			        var end;
			        var res;
			        // compute what the alignment should be
			        if (!alignment) {
			            dateIncrementInput = this.options.dateIncrement;
			            if (dateIncrementInput) {
			                dateIncrementDuration = createDuration(dateIncrementInput);
			                // use the smaller of the two units
			                if (asRoughMs(dateIncrementDuration) < asRoughMs(duration)) {
			                    alignment = greatestDurationDenominator(dateIncrementDuration, !getWeeksFromInput(dateIncrementInput)).unit;
			                }
			                else {
			                    alignment = unit;
			                }
			            }
			            else {
			                alignment = unit;
			            }
			        }
			        // if the view displays a single day or smaller
			        if (asRoughDays(duration) <= 1) {
			            if (this.isHiddenDay(start)) {
			                start = this.skipHiddenDays(start, direction);
			                start = startOfDay(start);
			            }
			        }
			        function computeRes() {
			            start = dateEnv.startOf(date, alignment);
			            end = dateEnv.add(start, duration);
			            res = { start: start, end: end };
			        }
			        computeRes();
			        // if range is completely enveloped by hidden days, go past the hidden days
			        if (!this.trimHiddenDays(res)) {
			            date = this.skipHiddenDays(date, direction);
			            computeRes();
			        }
			        return res;
			    };
			    // Builds the "current" range when a dayCount is specified.
			    DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
			        var dateEnv = this.dateEnv;
			        var customAlignment = this.options.dateAlignment;
			        var runningCount = 0;
			        var start = date;
			        var end;
			        if (customAlignment) {
			            start = dateEnv.startOf(start, customAlignment);
			        }
			        start = startOfDay(start);
			        start = this.skipHiddenDays(start, direction);
			        end = start;
			        do {
			            end = addDays(end, 1);
			            if (!this.isHiddenDay(end)) {
			                runningCount++;
			            }
			        } while (runningCount < dayCount);
			        return { start: start, end: end };
			    };
			    // Builds a normalized range object for the "visible" range,
			    // which is a way to define the currentRange and activeRange at the same time.
			    DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
			        var dateEnv = this.dateEnv;
			        var visibleRange = this.getRangeOption('visibleRange', dateEnv.toDate(date));
			        if (visibleRange && (visibleRange.start == null || visibleRange.end == null)) {
			            return null;
			        }
			        return visibleRange;
			    };
			    // Computes the range that will represent the element/cells for *rendering*,
			    // but which may have voided days/times.
			    // not responsible for trimming hidden days.
			    DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
			        return currentRange;
			    };
			    // Compute the duration value that should be added/substracted to the current date
			    // when a prev/next operation happens.
			    DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
			        var dateIncrementInput = this.options.dateIncrement;
			        var customAlignment;
			        if (dateIncrementInput) {
			            return createDuration(dateIncrementInput);
			        }
			        else if ((customAlignment = this.options.dateAlignment)) {
			            return createDuration(1, customAlignment);
			        }
			        else if (fallback) {
			            return fallback;
			        }
			        else {
			            return createDuration({ days: 1 });
			        }
			    };
			    // Arguments after name will be forwarded to a hypothetical function value
			    // WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
			    // Always clone your objects if you fear mutation.
			    DateProfileGenerator.prototype.getRangeOption = function (name) {
			        var otherArgs = [];
			        for (var _i = 1; _i < arguments.length; _i++) {
			            otherArgs[_i - 1] = arguments[_i];
			        }
			        var val = this.options[name];
			        if (typeof val === 'function') {
			            val = val.apply(null, otherArgs);
			        }
			        if (val) {
			            val = parseRange(val, this.dateEnv);
			        }
			        if (val) {
			            val = computeVisibleDayRange(val);
			        }
			        return val;
			    };
			    /* Hidden Days
			    ------------------------------------------------------------------------------------------------------------------*/
			    // Initializes internal variables related to calculating hidden days-of-week
			    DateProfileGenerator.prototype.initHiddenDays = function () {
			        var hiddenDays = this.options.hiddenDays || []; // array of day-of-week indices that are hidden
			        var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
			        var dayCnt = 0;
			        var i;
			        if (this.options.weekends === false) {
			            hiddenDays.push(0, 6); // 0=sunday, 6=saturday
			        }
			        for (i = 0; i < 7; i++) {
			            if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
			                dayCnt++;
			            }
			        }
			        if (!dayCnt) {
			            throw new Error('invalid hiddenDays'); // all days were hidden? bad.
			        }
			        this.isHiddenDayHash = isHiddenDayHash;
			    };
			    // Remove days from the beginning and end of the range that are computed as hidden.
			    // If the whole range is trimmed off, returns null
			    DateProfileGenerator.prototype.trimHiddenDays = function (range) {
			        var start = range.start;
			        var end = range.end;
			        if (start) {
			            start = this.skipHiddenDays(start);
			        }
			        if (end) {
			            end = this.skipHiddenDays(end, -1, true);
			        }
			        if (start == null || end == null || start < end) {
			            return { start: start, end: end };
			        }
			        return null;
			    };
			    // Is the current day hidden?
			    // `day` is a day-of-week index (0-6), or a Date (used for UTC)
			    DateProfileGenerator.prototype.isHiddenDay = function (day) {
			        if (day instanceof Date) {
			            day = day.getUTCDay();
			        }
			        return this.isHiddenDayHash[day];
			    };
			    // Incrementing the current day until it is no longer a hidden day, returning a copy.
			    // DOES NOT CONSIDER validRange!
			    // If the initial value of `date` is not a hidden day, don't do anything.
			    // Pass `isExclusive` as `true` if you are dealing with an end date.
			    // `inc` defaults to `1` (increment one day forward each time)
			    DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
			        if (inc === void 0) { inc = 1; }
			        if (isExclusive === void 0) { isExclusive = false; }
			        while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
			            date = addDays(date, inc);
			        }
			        return date;
			    };
			    return DateProfileGenerator;
			}());
			// TODO: find a way to avoid comparing DateProfiles. it's tedious
			function isDateProfilesEqual(p0, p1) {
			    return rangesEqual(p0.validRange, p1.validRange) &&
			        rangesEqual(p0.activeRange, p1.activeRange) &&
			        rangesEqual(p0.renderRange, p1.renderRange) &&
			        durationsEqual(p0.minTime, p1.minTime) &&
			        durationsEqual(p0.maxTime, p1.maxTime);
			    /*
			    TODO: compare more?
			      currentRange: DateRange
			      currentRangeUnit: string
			      isRangeAllDay: boolean
			      isValid: boolean
			      dateIncrement: Duration
			    */
			}

			function reduce (state, action, calendar) {
			    var viewType = reduceViewType(state.viewType, action);
			    var dateProfile = reduceDateProfile(state.dateProfile, action, state.currentDate, viewType, calendar);
			    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendar);
			    var nextState = __assign({}, state, { viewType: viewType,
			        dateProfile: dateProfile, currentDate: reduceCurrentDate(state.currentDate, action, dateProfile), eventSources: eventSources, eventStore: reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendar), dateSelection: reduceDateSelection(state.dateSelection, action), eventSelection: reduceSelectedEvent(state.eventSelection, action), eventDrag: reduceEventDrag(state.eventDrag, action), eventResize: reduceEventResize(state.eventResize, action), eventSourceLoadingLevel: computeLoadingLevel(eventSources), loadingLevel: computeLoadingLevel(eventSources) });
			    for (var _i = 0, _a = calendar.pluginSystem.hooks.reducers; _i < _a.length; _i++) {
			        var reducerFunc = _a[_i];
			        nextState = reducerFunc(nextState, action, calendar);
			    }
			    // console.log(action.type, nextState)
			    return nextState;
			}
			function reduceViewType(currentViewType, action) {
			    switch (action.type) {
			        case 'SET_VIEW_TYPE':
			            return action.viewType;
			        default:
			            return currentViewType;
			    }
			}
			function reduceDateProfile(currentDateProfile, action, currentDate, viewType, calendar) {
			    var newDateProfile;
			    switch (action.type) {
			        case 'PREV':
			            newDateProfile = calendar.dateProfileGenerators[viewType].buildPrev(currentDateProfile, currentDate);
			            break;
			        case 'NEXT':
			            newDateProfile = calendar.dateProfileGenerators[viewType].buildNext(currentDateProfile, currentDate);
			            break;
			        case 'SET_DATE':
			            if (!currentDateProfile.activeRange ||
			                !rangeContainsMarker(currentDateProfile.currentRange, action.dateMarker)) {
			                newDateProfile = calendar.dateProfileGenerators[viewType].build(action.dateMarker, undefined, true // forceToValid
			                );
			            }
			            break;
			        case 'SET_VIEW_TYPE':
			            var generator = calendar.dateProfileGenerators[viewType];
			            if (!generator) {
			                throw new Error(viewType ?
			                    'The FullCalendar view "' + viewType + '" does not exist. Make sure your plugins are loaded correctly.' :
			                    'No available FullCalendar view plugins.');
			            }
			            newDateProfile = generator.build(action.dateMarker || currentDate, undefined, true // forceToValid
			            );
			            break;
			    }
			    if (newDateProfile &&
			        newDateProfile.isValid &&
			        !(currentDateProfile && isDateProfilesEqual(currentDateProfile, newDateProfile))) {
			        return newDateProfile;
			    }
			    else {
			        return currentDateProfile;
			    }
			}
			function reduceCurrentDate(currentDate, action, dateProfile) {
			    switch (action.type) {
			        case 'PREV':
			        case 'NEXT':
			            if (!rangeContainsMarker(dateProfile.currentRange, currentDate)) {
			                return dateProfile.currentRange.start;
			            }
			            else {
			                return currentDate;
			            }
			        case 'SET_DATE':
			        case 'SET_VIEW_TYPE':
			            var newDate = action.dateMarker || currentDate;
			            if (dateProfile.activeRange && !rangeContainsMarker(dateProfile.activeRange, newDate)) {
			                return dateProfile.currentRange.start;
			            }
			            else {
			                return newDate;
			            }
			        default:
			            return currentDate;
			    }
			}
			function reduceDateSelection(currentSelection, action, calendar) {
			    switch (action.type) {
			        case 'SELECT_DATES':
			            return action.selection;
			        case 'UNSELECT_DATES':
			            return null;
			        default:
			            return currentSelection;
			    }
			}
			function reduceSelectedEvent(currentInstanceId, action) {
			    switch (action.type) {
			        case 'SELECT_EVENT':
			            return action.eventInstanceId;
			        case 'UNSELECT_EVENT':
			            return '';
			        default:
			            return currentInstanceId;
			    }
			}
			function reduceEventDrag(currentDrag, action, sources, calendar) {
			    switch (action.type) {
			        case 'SET_EVENT_DRAG':
			            var newDrag = action.state;
			            return {
			                affectedEvents: newDrag.affectedEvents,
			                mutatedEvents: newDrag.mutatedEvents,
			                isEvent: newDrag.isEvent,
			                origSeg: newDrag.origSeg
			            };
			        case 'UNSET_EVENT_DRAG':
			            return null;
			        default:
			            return currentDrag;
			    }
			}
			function reduceEventResize(currentResize, action, sources, calendar) {
			    switch (action.type) {
			        case 'SET_EVENT_RESIZE':
			            var newResize = action.state;
			            return {
			                affectedEvents: newResize.affectedEvents,
			                mutatedEvents: newResize.mutatedEvents,
			                isEvent: newResize.isEvent,
			                origSeg: newResize.origSeg
			            };
			        case 'UNSET_EVENT_RESIZE':
			            return null;
			        default:
			            return currentResize;
			    }
			}
			function computeLoadingLevel(eventSources) {
			    var cnt = 0;
			    for (var sourceId in eventSources) {
			        if (eventSources[sourceId].isFetching) {
			            cnt++;
			        }
			    }
			    return cnt;
			}

			var STANDARD_PROPS = {
			    start: null,
			    end: null,
			    allDay: Boolean
			};
			function parseDateSpan(raw, dateEnv, defaultDuration) {
			    var span = parseOpenDateSpan(raw, dateEnv);
			    var range = span.range;
			    if (!range.start) {
			        return null;
			    }
			    if (!range.end) {
			        if (defaultDuration == null) {
			            return null;
			        }
			        else {
			            range.end = dateEnv.add(range.start, defaultDuration);
			        }
			    }
			    return span;
			}
			/*
			TODO: somehow combine with parseRange?
			Will return null if the start/end props were present but parsed invalidly.
			*/
			function parseOpenDateSpan(raw, dateEnv) {
			    var leftovers = {};
			    var standardProps = refineProps(raw, STANDARD_PROPS, {}, leftovers);
			    var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
			    var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
			    var allDay = standardProps.allDay;
			    if (allDay == null) {
			        allDay = (startMeta && startMeta.isTimeUnspecified) &&
			            (!endMeta || endMeta.isTimeUnspecified);
			    }
			    // use this leftover object as the selection object
			    leftovers.range = {
			        start: startMeta ? startMeta.marker : null,
			        end: endMeta ? endMeta.marker : null
			    };
			    leftovers.allDay = allDay;
			    return leftovers;
			}
			function buildDateSpanApi(span, dateEnv) {
			    return {
			        start: dateEnv.toDate(span.range.start),
			        end: dateEnv.toDate(span.range.end),
			        startStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
			        endStr: dateEnv.formatIso(span.range.end, { omitTime: span.allDay }),
			        allDay: span.allDay
			    };
			}
			function buildDatePointApi(span, dateEnv) {
			    return {
			        date: dateEnv.toDate(span.range.start),
			        dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
			        allDay: span.allDay
			    };
			}
			function fabricateEventRange(dateSpan, eventUiBases, calendar) {
			    var def = parseEventDef({ editable: false }, '', // sourceId
			    dateSpan.allDay, true, // hasEnd
			    calendar);
			    return {
			        def: def,
			        ui: compileEventUi(def, eventUiBases),
			        instance: createEventInstance(def.defId, dateSpan.range),
			        range: dateSpan.range,
			        isStart: true,
			        isEnd: true
			    };
			}

			function compileViewDefs(defaultConfigs, overrideConfigs) {
			    var hash = {};
			    var viewType;
			    for (viewType in defaultConfigs) {
			        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
			    }
			    for (viewType in overrideConfigs) {
			        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
			    }
			    return hash;
			}
			function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
			    if (hash[viewType]) {
			        return hash[viewType];
			    }
			    var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
			    if (viewDef) {
			        hash[viewType] = viewDef;
			    }
			    return viewDef;
			}
			function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
			    var defaultConfig = defaultConfigs[viewType];
			    var overrideConfig = overrideConfigs[viewType];
			    var queryProp = function (name) {
			        return (defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
			            ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null);
			    };
			    var theClass = queryProp('class');
			    var superType = queryProp('superType');
			    if (!superType && theClass) {
			        superType =
			            findViewNameBySubclass(theClass, overrideConfigs) ||
			                findViewNameBySubclass(theClass, defaultConfigs);
			    }
			    var superDef = null;
			    if (superType) {
			        if (superType === viewType) {
			            throw new Error('Can\'t have a custom view type that references itself');
			        }
			        superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
			    }
			    if (!theClass && superDef) {
			        theClass = superDef.class;
			    }
			    if (!theClass) {
			        return null; // don't throw a warning, might be settings for a single-unit view
			    }
			    return {
			        type: viewType,
			        class: theClass,
			        defaults: __assign({}, (superDef ? superDef.defaults : {}), (defaultConfig ? defaultConfig.options : {})),
			        overrides: __assign({}, (superDef ? superDef.overrides : {}), (overrideConfig ? overrideConfig.options : {}))
			    };
			}
			function findViewNameBySubclass(viewSubclass, configs) {
			    var superProto = Object.getPrototypeOf(viewSubclass.prototype);
			    for (var viewType in configs) {
			        var parsed = configs[viewType];
			        // need DIRECT subclass, so instanceof won't do it
			        if (parsed.class && parsed.class.prototype === superProto) {
			            return viewType;
			        }
			    }
			    return '';
			}

			function parseViewConfigs(inputs) {
			    return mapHash(inputs, parseViewConfig);
			}
			var VIEW_DEF_PROPS = {
			    type: String,
			    class: null
			};
			function parseViewConfig(input) {
			    if (typeof input === 'function') {
			        input = { class: input };
			    }
			    var options = {};
			    var props = refineProps(input, VIEW_DEF_PROPS, {}, options);
			    return {
			        superType: props.type,
			        class: props.class,
			        options: options
			    };
			}

			function buildViewSpecs(defaultInputs, optionsManager) {
			    var defaultConfigs = parseViewConfigs(defaultInputs);
			    var overrideConfigs = parseViewConfigs(optionsManager.overrides.views);
			    var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
			    return mapHash(viewDefs, function (viewDef) {
			        return buildViewSpec(viewDef, overrideConfigs, optionsManager);
			    });
			}
			function buildViewSpec(viewDef, overrideConfigs, optionsManager) {
			    var durationInput = viewDef.overrides.duration ||
			        viewDef.defaults.duration ||
			        optionsManager.dynamicOverrides.duration ||
			        optionsManager.overrides.duration;
			    var duration = null;
			    var durationUnit = '';
			    var singleUnit = '';
			    var singleUnitOverrides = {};
			    if (durationInput) {
			        duration = createDuration(durationInput);
			        if (duration) { // valid?
			            var denom = greatestDurationDenominator(duration, !getWeeksFromInput(durationInput));
			            durationUnit = denom.unit;
			            if (denom.value === 1) {
			                singleUnit = durationUnit;
			                singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].options : {};
			            }
			        }
			    }
			    var queryButtonText = function (options) {
			        var buttonTextMap = options.buttonText || {};
			        var buttonTextKey = viewDef.defaults.buttonTextKey;
			        if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
			            return buttonTextMap[buttonTextKey];
			        }
			        if (buttonTextMap[viewDef.type] != null) {
			            return buttonTextMap[viewDef.type];
			        }
			        if (buttonTextMap[singleUnit] != null) {
			            return buttonTextMap[singleUnit];
			        }
			    };
			    return {
			        type: viewDef.type,
			        class: viewDef.class,
			        duration: duration,
			        durationUnit: durationUnit,
			        singleUnit: singleUnit,
			        options: __assign({}, globalDefaults, viewDef.defaults, optionsManager.dirDefaults, optionsManager.localeDefaults, optionsManager.overrides, singleUnitOverrides, viewDef.overrides, optionsManager.dynamicOverrides),
			        buttonTextOverride: queryButtonText(optionsManager.dynamicOverrides) ||
			            queryButtonText(optionsManager.overrides) || // constructor-specified buttonText lookup hash takes precedence
			            viewDef.overrides.buttonText,
			        buttonTextDefault: queryButtonText(optionsManager.localeDefaults) ||
			            queryButtonText(optionsManager.dirDefaults) ||
			            viewDef.defaults.buttonText ||
			            queryButtonText(globalDefaults) ||
			            viewDef.type // fall back to given view name
			    };
			}

			var Toolbar = /** @class */ (function (_super) {
			    __extends(Toolbar, _super);
			    function Toolbar(extraClassName) {
			        var _this = _super.call(this) || this;
			        _this._renderLayout = memoizeRendering(_this.renderLayout, _this.unrenderLayout);
			        _this._updateTitle = memoizeRendering(_this.updateTitle, null, [_this._renderLayout]);
			        _this._updateActiveButton = memoizeRendering(_this.updateActiveButton, null, [_this._renderLayout]);
			        _this._updateToday = memoizeRendering(_this.updateToday, null, [_this._renderLayout]);
			        _this._updatePrev = memoizeRendering(_this.updatePrev, null, [_this._renderLayout]);
			        _this._updateNext = memoizeRendering(_this.updateNext, null, [_this._renderLayout]);
			        _this.el = createElement('div', { className: 'fc-toolbar ' + extraClassName });
			        return _this;
			    }
			    Toolbar.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        this._renderLayout.unrender(); // should unrender everything else
			        removeElement(this.el);
			    };
			    Toolbar.prototype.render = function (props) {
			        this._renderLayout(props.layout);
			        this._updateTitle(props.title);
			        this._updateActiveButton(props.activeButton);
			        this._updateToday(props.isTodayEnabled);
			        this._updatePrev(props.isPrevEnabled);
			        this._updateNext(props.isNextEnabled);
			    };
			    Toolbar.prototype.renderLayout = function (layout) {
			        var el = this.el;
			        this.viewsWithButtons = [];
			        appendToElement(el, this.renderSection('left', layout.left));
			        appendToElement(el, this.renderSection('center', layout.center));
			        appendToElement(el, this.renderSection('right', layout.right));
			    };
			    Toolbar.prototype.unrenderLayout = function () {
			        this.el.innerHTML = '';
			    };
			    Toolbar.prototype.renderSection = function (position, buttonStr) {
			        var _this = this;
			        var _a = this.context, theme = _a.theme, calendar = _a.calendar;
			        var optionsManager = calendar.optionsManager;
			        var viewSpecs = calendar.viewSpecs;
			        var sectionEl = createElement('div', { className: 'fc-' + position });
			        var calendarCustomButtons = optionsManager.computed.customButtons || {};
			        var calendarButtonTextOverrides = optionsManager.overrides.buttonText || {};
			        var calendarButtonText = optionsManager.computed.buttonText || {};
			        if (buttonStr) {
			            buttonStr.split(' ').forEach(function (buttonGroupStr, i) {
			                var groupChildren = [];
			                var isOnlyButtons = true;
			                var groupEl;
			                buttonGroupStr.split(',').forEach(function (buttonName, j) {
			                    var customButtonProps;
			                    var viewSpec;
			                    var buttonClick;
			                    var buttonIcon; // only one of these will be set
			                    var buttonText; // "
			                    var buttonInnerHtml;
			                    var buttonClasses;
			                    var buttonEl;
			                    var buttonAriaAttr;
			                    if (buttonName === 'title') {
			                        groupChildren.push(htmlToElement('<h2>&nbsp;</h2>')); // we always want it to take up height
			                        isOnlyButtons = false;
			                    }
			                    else {
			                        if ((customButtonProps = calendarCustomButtons[buttonName])) {
			                            buttonClick = function (ev) {
			                                if (customButtonProps.click) {
			                                    customButtonProps.click.call(buttonEl, ev);
			                                }
			                            };
			                            (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
			                                (buttonIcon = theme.getIconClass(buttonName)) ||
			                                (buttonText = customButtonProps.text);
			                        }
			                        else if ((viewSpec = viewSpecs[buttonName])) {
			                            _this.viewsWithButtons.push(buttonName);
			                            buttonClick = function () {
			                                calendar.changeView(buttonName);
			                            };
			                            (buttonText = viewSpec.buttonTextOverride) ||
			                                (buttonIcon = theme.getIconClass(buttonName)) ||
			                                (buttonText = viewSpec.buttonTextDefault);
			                        }
			                        else if (calendar[buttonName]) { // a calendar method
			                            buttonClick = function () {
			                                calendar[buttonName]();
			                            };
			                            (buttonText = calendarButtonTextOverrides[buttonName]) ||
			                                (buttonIcon = theme.getIconClass(buttonName)) ||
			                                (buttonText = calendarButtonText[buttonName]);
			                            //            ^ everything else is considered default
			                        }
			                        if (buttonClick) {
			                            buttonClasses = [
			                                'fc-' + buttonName + '-button',
			                                theme.getClass('button')
			                            ];
			                            if (buttonText) {
			                                buttonInnerHtml = htmlEscape(buttonText);
			                                buttonAriaAttr = '';
			                            }
			                            else if (buttonIcon) {
			                                buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
			                                buttonAriaAttr = ' aria-label="' + buttonName + '"';
			                            }
			                            buttonEl = htmlToElement(// type="button" so that it doesn't submit a form
			                            '<button type="button" class="' + buttonClasses.join(' ') + '"' +
			                                buttonAriaAttr +
			                                '>' + buttonInnerHtml + '</button>');
			                            buttonEl.addEventListener('click', buttonClick);
			                            groupChildren.push(buttonEl);
			                        }
			                    }
			                });
			                if (groupChildren.length > 1) {
			                    groupEl = document.createElement('div');
			                    var buttonGroupClassName = theme.getClass('buttonGroup');
			                    if (isOnlyButtons && buttonGroupClassName) {
			                        groupEl.classList.add(buttonGroupClassName);
			                    }
			                    appendToElement(groupEl, groupChildren);
			                    sectionEl.appendChild(groupEl);
			                }
			                else {
			                    appendToElement(sectionEl, groupChildren); // 1 or 0 children
			                }
			            });
			        }
			        return sectionEl;
			    };
			    Toolbar.prototype.updateToday = function (isTodayEnabled) {
			        this.toggleButtonEnabled('today', isTodayEnabled);
			    };
			    Toolbar.prototype.updatePrev = function (isPrevEnabled) {
			        this.toggleButtonEnabled('prev', isPrevEnabled);
			    };
			    Toolbar.prototype.updateNext = function (isNextEnabled) {
			        this.toggleButtonEnabled('next', isNextEnabled);
			    };
			    Toolbar.prototype.updateTitle = function (text) {
			        findElements(this.el, 'h2').forEach(function (titleEl) {
			            titleEl.innerText = text;
			        });
			    };
			    Toolbar.prototype.updateActiveButton = function (buttonName) {
			        var theme = this.context.theme;
			        var className = theme.getClass('buttonActive');
			        findElements(this.el, 'button').forEach(function (buttonEl) {
			            if (buttonName && buttonEl.classList.contains('fc-' + buttonName + '-button')) {
			                buttonEl.classList.add(className);
			            }
			            else {
			                buttonEl.classList.remove(className);
			            }
			        });
			    };
			    Toolbar.prototype.toggleButtonEnabled = function (buttonName, bool) {
			        findElements(this.el, '.fc-' + buttonName + '-button').forEach(function (buttonEl) {
			            buttonEl.disabled = !bool;
			        });
			    };
			    return Toolbar;
			}(Component));

			var CalendarComponent = /** @class */ (function (_super) {
			    __extends(CalendarComponent, _super);
			    function CalendarComponent(el) {
			        var _this = _super.call(this) || this;
			        _this.elClassNames = [];
			        _this.renderSkeleton = memoizeRendering(_this._renderSkeleton, _this._unrenderSkeleton);
			        _this.renderToolbars = memoizeRendering(_this._renderToolbars, _this._unrenderToolbars, [_this.renderSkeleton]);
			        _this.buildComponentContext = memoize(buildComponentContext);
			        _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
			        _this.el = el;
			        _this.computeTitle = memoize(computeTitle);
			        _this.parseBusinessHours = memoize(function (input) {
			            return parseBusinessHours(input, _this.context.calendar);
			        });
			        return _this;
			    }
			    CalendarComponent.prototype.render = function (props, context) {
			        this.freezeHeight();
			        var title = this.computeTitle(props.dateProfile, props.viewSpec.options);
			        this.renderSkeleton(context);
			        this.renderToolbars(props.viewSpec, props.dateProfile, props.currentDate, title);
			        this.renderView(props, title);
			        this.updateSize();
			        this.thawHeight();
			    };
			    CalendarComponent.prototype.destroy = function () {
			        if (this.header) {
			            this.header.destroy();
			        }
			        if (this.footer) {
			            this.footer.destroy();
			        }
			        this.renderSkeleton.unrender(); // will call destroyView
			        _super.prototype.destroy.call(this);
			    };
			    CalendarComponent.prototype._renderSkeleton = function (context) {
			        this.updateElClassNames(context);
			        prependToElement(this.el, this.contentEl = createElement('div', { className: 'fc-view-container' }));
			        var calendar = context.calendar;
			        for (var _i = 0, _a = calendar.pluginSystem.hooks.viewContainerModifiers; _i < _a.length; _i++) {
			            var modifyViewContainer = _a[_i];
			            modifyViewContainer(this.contentEl, calendar);
			        }
			    };
			    CalendarComponent.prototype._unrenderSkeleton = function () {
			        // weird to have this here
			        if (this.view) {
			            this.savedScroll = this.view.queryScroll();
			            this.view.destroy();
			            this.view = null;
			        }
			        removeElement(this.contentEl);
			        this.removeElClassNames();
			    };
			    CalendarComponent.prototype.removeElClassNames = function () {
			        var classList = this.el.classList;
			        for (var _i = 0, _a = this.elClassNames; _i < _a.length; _i++) {
			            var className = _a[_i];
			            classList.remove(className);
			        }
			        this.elClassNames = [];
			    };
			    CalendarComponent.prototype.updateElClassNames = function (context) {
			        this.removeElClassNames();
			        var theme = context.theme, options = context.options;
			        this.elClassNames = [
			            'fc',
			            'fc-' + options.dir,
			            theme.getClass('widget')
			        ];
			        var classList = this.el.classList;
			        for (var _i = 0, _a = this.elClassNames; _i < _a.length; _i++) {
			            var className = _a[_i];
			            classList.add(className);
			        }
			    };
			    CalendarComponent.prototype._renderToolbars = function (viewSpec, dateProfile, currentDate, title) {
			        var _a = this, context = _a.context, header = _a.header, footer = _a.footer;
			        var options = context.options, calendar = context.calendar;
			        var headerLayout = options.header;
			        var footerLayout = options.footer;
			        var dateProfileGenerator = this.props.dateProfileGenerator;
			        var now = calendar.getNow();
			        var todayInfo = dateProfileGenerator.build(now);
			        var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate);
			        var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate);
			        var toolbarProps = {
			            title: title,
			            activeButton: viewSpec.type,
			            isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
			            isPrevEnabled: prevInfo.isValid,
			            isNextEnabled: nextInfo.isValid
			        };
			        if (headerLayout) {
			            if (!header) {
			                header = this.header = new Toolbar('fc-header-toolbar');
			                prependToElement(this.el, header.el);
			            }
			            header.receiveProps(__assign({ layout: headerLayout }, toolbarProps), context);
			        }
			        else if (header) {
			            header.destroy();
			            header = this.header = null;
			        }
			        if (footerLayout) {
			            if (!footer) {
			                footer = this.footer = new Toolbar('fc-footer-toolbar');
			                appendToElement(this.el, footer.el);
			            }
			            footer.receiveProps(__assign({ layout: footerLayout }, toolbarProps), context);
			        }
			        else if (footer) {
			            footer.destroy();
			            footer = this.footer = null;
			        }
			    };
			    CalendarComponent.prototype._unrenderToolbars = function () {
			        if (this.header) {
			            this.header.destroy();
			            this.header = null;
			        }
			        if (this.footer) {
			            this.footer.destroy();
			            this.footer = null;
			        }
			    };
			    CalendarComponent.prototype.renderView = function (props, title) {
			        var view = this.view;
			        var _a = this.context, calendar = _a.calendar, options = _a.options;
			        var viewSpec = props.viewSpec, dateProfileGenerator = props.dateProfileGenerator;
			        if (!view || view.viewSpec !== viewSpec) {
			            if (view) {
			                view.destroy();
			            }
			            view = this.view = new viewSpec['class'](viewSpec, this.contentEl);
			            if (this.savedScroll) {
			                view.addScroll(this.savedScroll, true);
			                this.savedScroll = null;
			            }
			        }
			        view.title = title; // for the API
			        var viewProps = {
			            dateProfileGenerator: dateProfileGenerator,
			            dateProfile: props.dateProfile,
			            businessHours: this.parseBusinessHours(viewSpec.options.businessHours),
			            eventStore: props.eventStore,
			            eventUiBases: props.eventUiBases,
			            dateSelection: props.dateSelection,
			            eventSelection: props.eventSelection,
			            eventDrag: props.eventDrag,
			            eventResize: props.eventResize
			        };
			        var transformers = this.buildViewPropTransformers(calendar.pluginSystem.hooks.viewPropsTransformers);
			        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
			            var transformer = transformers_1[_i];
			            __assign(viewProps, transformer.transform(viewProps, viewSpec, props, options));
			        }
			        view.receiveProps(viewProps, this.buildComponentContext(this.context, viewSpec, view));
			    };
			    // Sizing
			    // -----------------------------------------------------------------------------------------------------------------
			    CalendarComponent.prototype.updateSize = function (isResize) {
			        if (isResize === void 0) { isResize = false; }
			        var view = this.view;
			        if (!view) {
			            return; // why?
			        }
			        if (isResize || this.isHeightAuto == null) {
			            this.computeHeightVars();
			        }
			        view.updateSize(isResize, this.viewHeight, this.isHeightAuto);
			        view.updateNowIndicator(); // we need to guarantee this will run after updateSize
			        view.popScroll(isResize);
			    };
			    CalendarComponent.prototype.computeHeightVars = function () {
			        var calendar = this.context.calendar; // yuck. need to handle dynamic options
			        var heightInput = calendar.opt('height');
			        var contentHeightInput = calendar.opt('contentHeight');
			        this.isHeightAuto = heightInput === 'auto' || contentHeightInput === 'auto';
			        if (typeof contentHeightInput === 'number') { // exists and not 'auto'
			            this.viewHeight = contentHeightInput;
			        }
			        else if (typeof contentHeightInput === 'function') { // exists and is a function
			            this.viewHeight = contentHeightInput();
			        }
			        else if (typeof heightInput === 'number') { // exists and not 'auto'
			            this.viewHeight = heightInput - this.queryToolbarsHeight();
			        }
			        else if (typeof heightInput === 'function') { // exists and is a function
			            this.viewHeight = heightInput() - this.queryToolbarsHeight();
			        }
			        else if (heightInput === 'parent') { // set to height of parent element
			            var parentEl = this.el.parentNode;
			            this.viewHeight = parentEl.getBoundingClientRect().height - this.queryToolbarsHeight();
			        }
			        else {
			            this.viewHeight = Math.round(this.contentEl.getBoundingClientRect().width /
			                Math.max(calendar.opt('aspectRatio'), .5));
			        }
			    };
			    CalendarComponent.prototype.queryToolbarsHeight = function () {
			        var height = 0;
			        if (this.header) {
			            height += computeHeightAndMargins(this.header.el);
			        }
			        if (this.footer) {
			            height += computeHeightAndMargins(this.footer.el);
			        }
			        return height;
			    };
			    // Height "Freezing"
			    // -----------------------------------------------------------------------------------------------------------------
			    CalendarComponent.prototype.freezeHeight = function () {
			        applyStyle(this.el, {
			            height: this.el.getBoundingClientRect().height,
			            overflow: 'hidden'
			        });
			    };
			    CalendarComponent.prototype.thawHeight = function () {
			        applyStyle(this.el, {
			            height: '',
			            overflow: ''
			        });
			    };
			    return CalendarComponent;
			}(Component));
			// Title and Date Formatting
			// -----------------------------------------------------------------------------------------------------------------
			// Computes what the title at the top of the calendar should be for this view
			function computeTitle(dateProfile, viewOptions) {
			    var range;
			    // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
			    if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
			        range = dateProfile.currentRange;
			    }
			    else { // for day units or smaller, use the actual day range
			        range = dateProfile.activeRange;
			    }
			    return this.context.dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || computeTitleFormat(dateProfile), viewOptions.titleRangeSeparator), { isEndExclusive: dateProfile.isRangeAllDay });
			}
			// Generates the format string that should be used to generate the title for the current date range.
			// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
			function computeTitleFormat(dateProfile) {
			    var currentRangeUnit = dateProfile.currentRangeUnit;
			    if (currentRangeUnit === 'year') {
			        return { year: 'numeric' };
			    }
			    else if (currentRangeUnit === 'month') {
			        return { year: 'numeric', month: 'long' }; // like "September 2014"
			    }
			    else {
			        var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
			        if (days !== null && days > 1) {
			            // multi-day range. shorter, like "Sep 9 - 10 2014"
			            return { year: 'numeric', month: 'short', day: 'numeric' };
			        }
			        else {
			            // one day. longer, like "September 9 2014"
			            return { year: 'numeric', month: 'long', day: 'numeric' };
			        }
			    }
			}
			// build a context scoped to the view
			function buildComponentContext(context, viewSpec, view) {
			    return context.extend(viewSpec.options, view);
			}
			// Plugin
			// -----------------------------------------------------------------------------------------------------------------
			function buildViewPropTransformers(theClasses) {
			    return theClasses.map(function (theClass) {
			        return new theClass();
			    });
			}

			var Interaction = /** @class */ (function () {
			    function Interaction(settings) {
			        this.component = settings.component;
			    }
			    Interaction.prototype.destroy = function () {
			    };
			    return Interaction;
			}());
			function parseInteractionSettings(component, input) {
			    return {
			        component: component,
			        el: input.el,
			        useEventCenter: input.useEventCenter != null ? input.useEventCenter : true
			    };
			}
			// global state
			var interactionSettingsStore = {};

			/*
			Detects when the user clicks on an event within a DateComponent
			*/
			var EventClicking = /** @class */ (function (_super) {
			    __extends(EventClicking, _super);
			    function EventClicking(settings) {
			        var _this = _super.call(this, settings) || this;
			        _this.handleSegClick = function (ev, segEl) {
			            var component = _this.component;
			            var _a = component.context, calendar = _a.calendar, view = _a.view;
			            var seg = getElSeg(segEl);
			            if (seg && // might be the <div> surrounding the more link
			                component.isValidSegDownEl(ev.target)) {
			                // our way to simulate a link click for elements that can't be <a> tags
			                // grab before trigger fired in case trigger trashes DOM thru rerendering
			                var hasUrlContainer = elementClosest(ev.target, '.fc-has-url');
			                var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
			                calendar.publiclyTrigger('eventClick', [
			                    {
			                        el: segEl,
			                        event: new EventApi(component.context.calendar, seg.eventRange.def, seg.eventRange.instance),
			                        jsEvent: ev,
			                        view: view
			                    }
			                ]);
			                if (url && !ev.defaultPrevented) {
			                    window.location.href = url;
			                }
			            }
			        };
			        var component = settings.component;
			        _this.destroy = listenBySelector(component.el, 'click', component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegClick);
			        return _this;
			    }
			    return EventClicking;
			}(Interaction));

			/*
			Triggers events and adds/removes core classNames when the user's pointer
			enters/leaves event-elements of a component.
			*/
			var EventHovering = /** @class */ (function (_super) {
			    __extends(EventHovering, _super);
			    function EventHovering(settings) {
			        var _this = _super.call(this, settings) || this;
			        // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
			        _this.handleEventElRemove = function (el) {
			            if (el === _this.currentSegEl) {
			                _this.handleSegLeave(null, _this.currentSegEl);
			            }
			        };
			        _this.handleSegEnter = function (ev, segEl) {
			            if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
			                segEl.classList.add('fc-allow-mouse-resize');
			                _this.currentSegEl = segEl;
			                _this.triggerEvent('eventMouseEnter', ev, segEl);
			            }
			        };
			        _this.handleSegLeave = function (ev, segEl) {
			            if (_this.currentSegEl) {
			                segEl.classList.remove('fc-allow-mouse-resize');
			                _this.currentSegEl = null;
			                _this.triggerEvent('eventMouseLeave', ev, segEl);
			            }
			        };
			        var component = settings.component;
			        _this.removeHoverListeners = listenToHoverBySelector(component.el, component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegEnter, _this.handleSegLeave);
			        // how to make sure component already has context?
			        component.context.calendar.on('eventElRemove', _this.handleEventElRemove);
			        return _this;
			    }
			    EventHovering.prototype.destroy = function () {
			        this.removeHoverListeners();
			        this.component.context.calendar.off('eventElRemove', this.handleEventElRemove);
			    };
			    EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
			        var component = this.component;
			        var _a = component.context, calendar = _a.calendar, view = _a.view;
			        var seg = getElSeg(segEl);
			        if (!ev || component.isValidSegDownEl(ev.target)) {
			            calendar.publiclyTrigger(publicEvName, [
			                {
			                    el: segEl,
			                    event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
			                    jsEvent: ev,
			                    view: view
			                }
			            ]);
			        }
			    };
			    return EventHovering;
			}(Interaction));

			var StandardTheme = /** @class */ (function (_super) {
			    __extends(StandardTheme, _super);
			    function StandardTheme() {
			        return _super !== null && _super.apply(this, arguments) || this;
			    }
			    return StandardTheme;
			}(Theme));
			StandardTheme.prototype.classes = {
			    widget: 'fc-unthemed',
			    widgetHeader: 'fc-widget-header',
			    widgetContent: 'fc-widget-content',
			    buttonGroup: 'fc-button-group',
			    button: 'fc-button fc-button-primary',
			    buttonActive: 'fc-button-active',
			    popoverHeader: 'fc-widget-header',
			    popoverContent: 'fc-widget-content',
			    // day grid
			    headerRow: 'fc-widget-header',
			    dayRow: 'fc-widget-content',
			    // list view
			    listView: 'fc-widget-content'
			};
			StandardTheme.prototype.baseIconClass = 'fc-icon';
			StandardTheme.prototype.iconClasses = {
			    close: 'fc-icon-x',
			    prev: 'fc-icon-chevron-left',
			    next: 'fc-icon-chevron-right',
			    prevYear: 'fc-icon-chevrons-left',
			    nextYear: 'fc-icon-chevrons-right'
			};
			StandardTheme.prototype.iconOverrideOption = 'buttonIcons';
			StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
			StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

			var Calendar = /** @class */ (function () {
			    function Calendar(el, overrides) {
			        var _this = this;
			        this.buildComponentContext = memoize(buildComponentContext$1);
			        this.parseRawLocales = memoize(parseRawLocales);
			        this.buildLocale = memoize(buildLocale);
			        this.buildDateEnv = memoize(buildDateEnv);
			        this.buildTheme = memoize(buildTheme);
			        this.buildEventUiSingleBase = memoize(this._buildEventUiSingleBase);
			        this.buildSelectionConfig = memoize(this._buildSelectionConfig);
			        this.buildEventUiBySource = memoizeOutput(buildEventUiBySource, isPropsEqual);
			        this.buildEventUiBases = memoize(buildEventUiBases);
			        this.interactionsStore = {};
			        this.actionQueue = [];
			        this.isReducing = false;
			        // isDisplaying: boolean = false // installed in DOM? accepting renders?
			        this.needsRerender = false; // needs a render?
			        this.isRendering = false; // currently in the executeRender function?
			        this.renderingPauseDepth = 0;
			        this.buildDelayedRerender = memoize(buildDelayedRerender);
			        this.afterSizingTriggers = {};
			        this.isViewUpdated = false;
			        this.isDatesUpdated = false;
			        this.isEventsUpdated = false;
			        this.el = el;
			        this.optionsManager = new OptionsManager(overrides || {});
			        this.pluginSystem = new PluginSystem();
			        // only do once. don't do in handleOptions. because can't remove plugins
			        this.addPluginInputs(this.optionsManager.computed.plugins || []);
			        this.handleOptions(this.optionsManager.computed);
			        this.publiclyTrigger('_init'); // for tests
			        this.hydrate();
			        this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions
			            .map(function (calendarInteractionClass) {
			            return new calendarInteractionClass(_this);
			        });
			    }
			    Calendar.prototype.addPluginInputs = function (pluginInputs) {
			        var pluginDefs = refinePluginDefs(pluginInputs);
			        for (var _i = 0, pluginDefs_1 = pluginDefs; _i < pluginDefs_1.length; _i++) {
			            var pluginDef = pluginDefs_1[_i];
			            this.pluginSystem.add(pluginDef);
			        }
			    };
			    Object.defineProperty(Calendar.prototype, "view", {
			        // public API
			        get: function () {
			            return this.component ? this.component.view : null;
			        },
			        enumerable: true,
			        configurable: true
			    });
			    // Public API for rendering
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.render = function () {
			        if (!this.component) {
			            this.component = new CalendarComponent(this.el);
			            this.renderableEventStore = createEmptyEventStore();
			            this.bindHandlers();
			            this.executeRender();
			        }
			        else {
			            this.requestRerender();
			        }
			    };
			    Calendar.prototype.destroy = function () {
			        if (this.component) {
			            this.unbindHandlers();
			            this.component.destroy(); // don't null-out. in case API needs access
			            this.component = null; // umm ???
			            for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
			                var interaction = _a[_i];
			                interaction.destroy();
			            }
			            this.publiclyTrigger('_destroyed');
			        }
			    };
			    // Handlers
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.bindHandlers = function () {
			        var _this = this;
			        // event delegation for nav links
			        this.removeNavLinkListener = listenBySelector(this.el, 'click', 'a[data-goto]', function (ev, anchorEl) {
			            var gotoOptions = anchorEl.getAttribute('data-goto');
			            gotoOptions = gotoOptions ? JSON.parse(gotoOptions) : {};
			            var dateEnv = _this.dateEnv;
			            var dateMarker = dateEnv.createMarker(gotoOptions.date);
			            var viewType = gotoOptions.type;
			            // property like "navLinkDayClick". might be a string or a function
			            var customAction = _this.viewOpt('navLink' + capitaliseFirstLetter(viewType) + 'Click');
			            if (typeof customAction === 'function') {
			                customAction(dateEnv.toDate(dateMarker), ev);
			            }
			            else {
			                if (typeof customAction === 'string') {
			                    viewType = customAction;
			                }
			                _this.zoomTo(dateMarker, viewType);
			            }
			        });
			        if (this.opt('handleWindowResize')) {
			            window.addEventListener('resize', this.windowResizeProxy = debounce(// prevents rapid calls
			            this.windowResize.bind(this), this.opt('windowResizeDelay')));
			        }
			    };
			    Calendar.prototype.unbindHandlers = function () {
			        this.removeNavLinkListener();
			        if (this.windowResizeProxy) {
			            window.removeEventListener('resize', this.windowResizeProxy);
			            this.windowResizeProxy = null;
			        }
			    };
			    // Dispatcher
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.hydrate = function () {
			        var _this = this;
			        this.state = this.buildInitialState();
			        var rawSources = this.opt('eventSources') || [];
			        var singleRawSource = this.opt('events');
			        var sources = []; // parsed
			        if (singleRawSource) {
			            rawSources.unshift(singleRawSource);
			        }
			        for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
			            var rawSource = rawSources_1[_i];
			            var source = parseEventSource(rawSource, this);
			            if (source) {
			                sources.push(source);
			            }
			        }
			        this.batchRendering(function () {
			            _this.dispatch({ type: 'INIT' }); // pass in sources here?
			            _this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: sources });
			            _this.dispatch({
			                type: 'SET_VIEW_TYPE',
			                viewType: _this.opt('defaultView') || _this.pluginSystem.hooks.defaultView
			            });
			        });
			    };
			    Calendar.prototype.buildInitialState = function () {
			        return {
			            viewType: null,
			            loadingLevel: 0,
			            eventSourceLoadingLevel: 0,
			            currentDate: this.getInitialDate(),
			            dateProfile: null,
			            eventSources: {},
			            eventStore: createEmptyEventStore(),
			            dateSelection: null,
			            eventSelection: '',
			            eventDrag: null,
			            eventResize: null
			        };
			    };
			    Calendar.prototype.dispatch = function (action) {
			        this.actionQueue.push(action);
			        if (!this.isReducing) {
			            this.isReducing = true;
			            var oldState = this.state;
			            while (this.actionQueue.length) {
			                this.state = this.reduce(this.state, this.actionQueue.shift(), this);
			            }
			            var newState = this.state;
			            this.isReducing = false;
			            if (!oldState.loadingLevel && newState.loadingLevel) {
			                this.publiclyTrigger('loading', [true]);
			            }
			            else if (oldState.loadingLevel && !newState.loadingLevel) {
			                this.publiclyTrigger('loading', [false]);
			            }
			            var view = this.component && this.component.view;
			            if (oldState.eventStore !== newState.eventStore) {
			                if (oldState.eventStore) {
			                    this.isEventsUpdated = true;
			                }
			            }
			            if (oldState.dateProfile !== newState.dateProfile) {
			                if (oldState.dateProfile && view) { // why would view be null!?
			                    this.publiclyTrigger('datesDestroy', [
			                        {
			                            view: view,
			                            el: view.el
			                        }
			                    ]);
			                }
			                this.isDatesUpdated = true;
			            }
			            if (oldState.viewType !== newState.viewType) {
			                if (oldState.viewType && view) { // why would view be null!?
			                    this.publiclyTrigger('viewSkeletonDestroy', [
			                        {
			                            view: view,
			                            el: view.el
			                        }
			                    ]);
			                }
			                this.isViewUpdated = true;
			            }
			            this.requestRerender();
			        }
			    };
			    Calendar.prototype.reduce = function (state, action, calendar) {
			        return reduce(state, action, calendar);
			    };
			    // Render Queue
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.requestRerender = function () {
			        this.needsRerender = true;
			        this.delayedRerender(); // will call a debounced-version of tryRerender
			    };
			    Calendar.prototype.tryRerender = function () {
			        if (this.component && // must be accepting renders
			            this.needsRerender && // indicates that a rerender was requested
			            !this.renderingPauseDepth && // not paused
			            !this.isRendering // not currently in the render loop
			        ) {
			            this.executeRender();
			        }
			    };
			    Calendar.prototype.batchRendering = function (func) {
			        this.renderingPauseDepth++;
			        func();
			        this.renderingPauseDepth--;
			        if (this.needsRerender) {
			            this.requestRerender();
			        }
			    };
			    // Rendering
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.executeRender = function () {
			        // clear these BEFORE the render so that new values will accumulate during render
			        this.needsRerender = false;
			        this.isRendering = true;
			        this.renderComponent();
			        this.isRendering = false;
			        // received a rerender request while rendering
			        if (this.needsRerender) {
			            this.delayedRerender();
			        }
			    };
			    /*
			    don't call this directly. use executeRender instead
			    */
			    Calendar.prototype.renderComponent = function () {
			        var _a = this, state = _a.state, component = _a.component;
			        var viewType = state.viewType;
			        var viewSpec = this.viewSpecs[viewType];
			        if (!viewSpec) {
			            throw new Error("View type \"" + viewType + "\" is not valid");
			        }
			        // if event sources are still loading and progressive rendering hasn't been enabled,
			        // keep rendering the last fully loaded set of events
			        var renderableEventStore = this.renderableEventStore =
			            (state.eventSourceLoadingLevel && !this.opt('progressiveEventRendering')) ?
			                this.renderableEventStore :
			                state.eventStore;
			        var eventUiSingleBase = this.buildEventUiSingleBase(viewSpec.options);
			        var eventUiBySource = this.buildEventUiBySource(state.eventSources);
			        var eventUiBases = this.eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
			        component.receiveProps(__assign({}, state, { viewSpec: viewSpec, dateProfileGenerator: this.dateProfileGenerators[viewType], dateProfile: state.dateProfile, eventStore: renderableEventStore, eventUiBases: eventUiBases, dateSelection: state.dateSelection, eventSelection: state.eventSelection, eventDrag: state.eventDrag, eventResize: state.eventResize }), this.buildComponentContext(this.theme, this.dateEnv, this.optionsManager.computed));
			        if (this.isViewUpdated) {
			            this.isViewUpdated = false;
			            this.publiclyTrigger('viewSkeletonRender', [
			                {
			                    view: component.view,
			                    el: component.view.el
			                }
			            ]);
			        }
			        if (this.isDatesUpdated) {
			            this.isDatesUpdated = false;
			            this.publiclyTrigger('datesRender', [
			                {
			                    view: component.view,
			                    el: component.view.el
			                }
			            ]);
			        }
			        if (this.isEventsUpdated) {
			            this.isEventsUpdated = false;
			        }
			        this.releaseAfterSizingTriggers();
			    };
			    // Options
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.setOption = function (name, val) {
			        var _a;
			        this.mutateOptions((_a = {}, _a[name] = val, _a), [], true);
			    };
			    Calendar.prototype.getOption = function (name) {
			        return this.optionsManager.computed[name];
			    };
			    Calendar.prototype.opt = function (name) {
			        return this.optionsManager.computed[name];
			    };
			    Calendar.prototype.viewOpt = function (name) {
			        return this.viewOpts()[name];
			    };
			    Calendar.prototype.viewOpts = function () {
			        return this.viewSpecs[this.state.viewType].options;
			    };
			    /*
			    handles option changes (like a diff)
			    */
			    Calendar.prototype.mutateOptions = function (updates, removals, isDynamic, deepEqual) {
			        var _this = this;
			        var changeHandlers = this.pluginSystem.hooks.optionChangeHandlers;
			        var normalUpdates = {};
			        var specialUpdates = {};
			        var oldDateEnv = this.dateEnv; // do this before handleOptions
			        var isTimeZoneDirty = false;
			        var isSizeDirty = false;
			        var anyDifficultOptions = Boolean(removals.length);
			        for (var name_1 in updates) {
			            if (changeHandlers[name_1]) {
			                specialUpdates[name_1] = updates[name_1];
			            }
			            else {
			                normalUpdates[name_1] = updates[name_1];
			            }
			        }
			        for (var name_2 in normalUpdates) {
			            if (/^(height|contentHeight|aspectRatio)$/.test(name_2)) {
			                isSizeDirty = true;
			            }
			            else if (/^(defaultDate|defaultView)$/.test(name_2)) ;
			            else {
			                anyDifficultOptions = true;
			                if (name_2 === 'timeZone') {
			                    isTimeZoneDirty = true;
			                }
			            }
			        }
			        this.optionsManager.mutate(normalUpdates, removals, isDynamic);
			        if (anyDifficultOptions) {
			            this.handleOptions(this.optionsManager.computed);
			        }
			        this.batchRendering(function () {
			            if (anyDifficultOptions) {
			                if (isTimeZoneDirty) {
			                    _this.dispatch({
			                        type: 'CHANGE_TIMEZONE',
			                        oldDateEnv: oldDateEnv
			                    });
			                }
			                /* HACK
			                has the same effect as calling this.requestRerender()
			                but recomputes the state's dateProfile
			                */
			                _this.dispatch({
			                    type: 'SET_VIEW_TYPE',
			                    viewType: _this.state.viewType
			                });
			            }
			            else if (isSizeDirty) {
			                _this.updateSize();
			            }
			            // special updates
			            if (deepEqual) {
			                for (var name_3 in specialUpdates) {
			                    changeHandlers[name_3](specialUpdates[name_3], _this, deepEqual);
			                }
			            }
			        });
			    };
			    /*
			    rebuilds things based off of a complete set of refined options
			    */
			    Calendar.prototype.handleOptions = function (options) {
			        var _this = this;
			        var pluginHooks = this.pluginSystem.hooks;
			        this.defaultAllDayEventDuration = createDuration(options.defaultAllDayEventDuration);
			        this.defaultTimedEventDuration = createDuration(options.defaultTimedEventDuration);
			        this.delayedRerender = this.buildDelayedRerender(options.rerenderDelay);
			        this.theme = this.buildTheme(options);
			        var available = this.parseRawLocales(options.locales);
			        this.availableRawLocales = available.map;
			        var locale = this.buildLocale(options.locale || available.defaultCode, available.map);
			        this.dateEnv = this.buildDateEnv(locale, options.timeZone, pluginHooks.namedTimeZonedImpl, options.firstDay, options.weekNumberCalculation, options.weekLabel, pluginHooks.cmdFormatter);
			        this.selectionConfig = this.buildSelectionConfig(options); // needs dateEnv. do after :(
			        // ineffecient to do every time?
			        this.viewSpecs = buildViewSpecs(pluginHooks.views, this.optionsManager);
			        // ineffecient to do every time?
			        this.dateProfileGenerators = mapHash(this.viewSpecs, function (viewSpec) {
			            return new viewSpec.class.prototype.dateProfileGeneratorClass(viewSpec, _this);
			        });
			    };
			    Calendar.prototype.getAvailableLocaleCodes = function () {
			        return Object.keys(this.availableRawLocales);
			    };
			    Calendar.prototype._buildSelectionConfig = function (rawOpts) {
			        return processScopedUiProps('select', rawOpts, this);
			    };
			    Calendar.prototype._buildEventUiSingleBase = function (rawOpts) {
			        if (rawOpts.editable) { // so 'editable' affected events
			            rawOpts = __assign({}, rawOpts, { eventEditable: true });
			        }
			        return processScopedUiProps('event', rawOpts, this);
			    };
			    // Trigger
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.hasPublicHandlers = function (name) {
			        return this.hasHandlers(name) ||
			            this.opt(name); // handler specified in options
			    };
			    Calendar.prototype.publiclyTrigger = function (name, args) {
			        var optHandler = this.opt(name);
			        this.triggerWith(name, this, args);
			        if (optHandler) {
			            return optHandler.apply(this, args);
			        }
			    };
			    Calendar.prototype.publiclyTriggerAfterSizing = function (name, args) {
			        var afterSizingTriggers = this.afterSizingTriggers;
			        (afterSizingTriggers[name] || (afterSizingTriggers[name] = [])).push(args);
			    };
			    Calendar.prototype.releaseAfterSizingTriggers = function () {
			        var afterSizingTriggers = this.afterSizingTriggers;
			        for (var name_4 in afterSizingTriggers) {
			            for (var _i = 0, _a = afterSizingTriggers[name_4]; _i < _a.length; _i++) {
			                var args = _a[_i];
			                this.publiclyTrigger(name_4, args);
			            }
			        }
			        this.afterSizingTriggers = {};
			    };
			    // View
			    // -----------------------------------------------------------------------------------------------------------------
			    // Returns a boolean about whether the view is okay to instantiate at some point
			    Calendar.prototype.isValidViewType = function (viewType) {
			        return Boolean(this.viewSpecs[viewType]);
			    };
			    Calendar.prototype.changeView = function (viewType, dateOrRange) {
			        var dateMarker = null;
			        if (dateOrRange) {
			            if (dateOrRange.start && dateOrRange.end) { // a range
			                this.optionsManager.mutate({ visibleRange: dateOrRange }, []); // will not rerender
			                this.handleOptions(this.optionsManager.computed); // ...but yuck
			            }
			            else { // a date
			                dateMarker = this.dateEnv.createMarker(dateOrRange); // just like gotoDate
			            }
			        }
			        this.unselect();
			        this.dispatch({
			            type: 'SET_VIEW_TYPE',
			            viewType: viewType,
			            dateMarker: dateMarker
			        });
			    };
			    // Forces navigation to a view for the given date.
			    // `viewType` can be a specific view name or a generic one like "week" or "day".
			    // needs to change
			    Calendar.prototype.zoomTo = function (dateMarker, viewType) {
			        var spec;
			        viewType = viewType || 'day'; // day is default zoom
			        spec = this.viewSpecs[viewType] ||
			            this.getUnitViewSpec(viewType);
			        this.unselect();
			        if (spec) {
			            this.dispatch({
			                type: 'SET_VIEW_TYPE',
			                viewType: spec.type,
			                dateMarker: dateMarker
			            });
			        }
			        else {
			            this.dispatch({
			                type: 'SET_DATE',
			                dateMarker: dateMarker
			            });
			        }
			    };
			    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
			    // Preference is given to views that have corresponding buttons.
			    Calendar.prototype.getUnitViewSpec = function (unit) {
			        var component = this.component;
			        var viewTypes = [];
			        var i;
			        var spec;
			        // put views that have buttons first. there will be duplicates, but oh
			        if (component.header) {
			            viewTypes.push.apply(viewTypes, component.header.viewsWithButtons);
			        }
			        if (component.footer) {
			            viewTypes.push.apply(viewTypes, component.footer.viewsWithButtons);
			        }
			        for (var viewType in this.viewSpecs) {
			            viewTypes.push(viewType);
			        }
			        for (i = 0; i < viewTypes.length; i++) {
			            spec = this.viewSpecs[viewTypes[i]];
			            if (spec) {
			                if (spec.singleUnit === unit) {
			                    return spec;
			                }
			            }
			        }
			    };
			    // Current Date
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.getInitialDate = function () {
			        var defaultDateInput = this.opt('defaultDate');
			        // compute the initial ambig-timezone date
			        if (defaultDateInput != null) {
			            return this.dateEnv.createMarker(defaultDateInput);
			        }
			        else {
			            return this.getNow(); // getNow already returns unzoned
			        }
			    };
			    Calendar.prototype.prev = function () {
			        this.unselect();
			        this.dispatch({ type: 'PREV' });
			    };
			    Calendar.prototype.next = function () {
			        this.unselect();
			        this.dispatch({ type: 'NEXT' });
			    };
			    Calendar.prototype.prevYear = function () {
			        this.unselect();
			        this.dispatch({
			            type: 'SET_DATE',
			            dateMarker: this.dateEnv.addYears(this.state.currentDate, -1)
			        });
			    };
			    Calendar.prototype.nextYear = function () {
			        this.unselect();
			        this.dispatch({
			            type: 'SET_DATE',
			            dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
			        });
			    };
			    Calendar.prototype.today = function () {
			        this.unselect();
			        this.dispatch({
			            type: 'SET_DATE',
			            dateMarker: this.getNow()
			        });
			    };
			    Calendar.prototype.gotoDate = function (zonedDateInput) {
			        this.unselect();
			        this.dispatch({
			            type: 'SET_DATE',
			            dateMarker: this.dateEnv.createMarker(zonedDateInput)
			        });
			    };
			    Calendar.prototype.incrementDate = function (deltaInput) {
			        var delta = createDuration(deltaInput);
			        if (delta) { // else, warn about invalid input?
			            this.unselect();
			            this.dispatch({
			                type: 'SET_DATE',
			                dateMarker: this.dateEnv.add(this.state.currentDate, delta)
			            });
			        }
			    };
			    // for external API
			    Calendar.prototype.getDate = function () {
			        return this.dateEnv.toDate(this.state.currentDate);
			    };
			    // Date Formatting Utils
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.formatDate = function (d, formatter) {
			        var dateEnv = this.dateEnv;
			        return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
			    };
			    // `settings` is for formatter AND isEndExclusive
			    Calendar.prototype.formatRange = function (d0, d1, settings) {
			        var dateEnv = this.dateEnv;
			        return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings, this.opt('defaultRangeSeparator')), settings);
			    };
			    Calendar.prototype.formatIso = function (d, omitTime) {
			        var dateEnv = this.dateEnv;
			        return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime: omitTime });
			    };
			    // Sizing
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.windowResize = function (ev) {
			        if (!this.isHandlingWindowResize &&
			            this.component && // why?
			            ev.target === window // not a jqui resize event
			        ) {
			            this.isHandlingWindowResize = true;
			            this.updateSize();
			            this.publiclyTrigger('windowResize', [this.view]);
			            this.isHandlingWindowResize = false;
			        }
			    };
			    Calendar.prototype.updateSize = function () {
			        if (this.component) { // when?
			            this.component.updateSize(true);
			        }
			    };
			    // Component Registration
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.registerInteractiveComponent = function (component, settingsInput) {
			        var settings = parseInteractionSettings(component, settingsInput);
			        var DEFAULT_INTERACTIONS = [
			            EventClicking,
			            EventHovering
			        ];
			        var interactionClasses = DEFAULT_INTERACTIONS.concat(this.pluginSystem.hooks.componentInteractions);
			        var interactions = interactionClasses.map(function (interactionClass) {
			            return new interactionClass(settings);
			        });
			        this.interactionsStore[component.uid] = interactions;
			        interactionSettingsStore[component.uid] = settings;
			    };
			    Calendar.prototype.unregisterInteractiveComponent = function (component) {
			        for (var _i = 0, _a = this.interactionsStore[component.uid]; _i < _a.length; _i++) {
			            var listener = _a[_i];
			            listener.destroy();
			        }
			        delete this.interactionsStore[component.uid];
			        delete interactionSettingsStore[component.uid];
			    };
			    // Date Selection / Event Selection / DayClick
			    // -----------------------------------------------------------------------------------------------------------------
			    // this public method receives start/end dates in any format, with any timezone
			    // NOTE: args were changed from v3
			    Calendar.prototype.select = function (dateOrObj, endDate) {
			        var selectionInput;
			        if (endDate == null) {
			            if (dateOrObj.start != null) {
			                selectionInput = dateOrObj;
			            }
			            else {
			                selectionInput = {
			                    start: dateOrObj,
			                    end: null
			                };
			            }
			        }
			        else {
			            selectionInput = {
			                start: dateOrObj,
			                end: endDate
			            };
			        }
			        var selection = parseDateSpan(selectionInput, this.dateEnv, createDuration({ days: 1 }) // TODO: cache this?
			        );
			        if (selection) { // throw parse error otherwise?
			            this.dispatch({ type: 'SELECT_DATES', selection: selection });
			            this.triggerDateSelect(selection);
			        }
			    };
			    // public method
			    Calendar.prototype.unselect = function (pev) {
			        if (this.state.dateSelection) {
			            this.dispatch({ type: 'UNSELECT_DATES' });
			            this.triggerDateUnselect(pev);
			        }
			    };
			    Calendar.prototype.triggerDateSelect = function (selection, pev) {
			        var arg = __assign({}, this.buildDateSpanApi(selection), { jsEvent: pev ? pev.origEvent : null, view: this.view });
			        this.publiclyTrigger('select', [arg]);
			    };
			    Calendar.prototype.triggerDateUnselect = function (pev) {
			        this.publiclyTrigger('unselect', [
			            {
			                jsEvent: pev ? pev.origEvent : null,
			                view: this.view
			            }
			        ]);
			    };
			    // TODO: receive pev?
			    Calendar.prototype.triggerDateClick = function (dateSpan, dayEl, view, ev) {
			        var arg = __assign({}, this.buildDatePointApi(dateSpan), { dayEl: dayEl, jsEvent: ev, // Is this always a mouse event? See #4655
			            view: view });
			        this.publiclyTrigger('dateClick', [arg]);
			    };
			    Calendar.prototype.buildDatePointApi = function (dateSpan) {
			        var props = {};
			        for (var _i = 0, _a = this.pluginSystem.hooks.datePointTransforms; _i < _a.length; _i++) {
			            var transform = _a[_i];
			            __assign(props, transform(dateSpan, this));
			        }
			        __assign(props, buildDatePointApi(dateSpan, this.dateEnv));
			        return props;
			    };
			    Calendar.prototype.buildDateSpanApi = function (dateSpan) {
			        var props = {};
			        for (var _i = 0, _a = this.pluginSystem.hooks.dateSpanTransforms; _i < _a.length; _i++) {
			            var transform = _a[_i];
			            __assign(props, transform(dateSpan, this));
			        }
			        __assign(props, buildDateSpanApi(dateSpan, this.dateEnv));
			        return props;
			    };
			    // Date Utils
			    // -----------------------------------------------------------------------------------------------------------------
			    // Returns a DateMarker for the current date, as defined by the client's computer or from the `now` option
			    Calendar.prototype.getNow = function () {
			        var now = this.opt('now');
			        if (typeof now === 'function') {
			            now = now();
			        }
			        if (now == null) {
			            return this.dateEnv.createNowMarker();
			        }
			        return this.dateEnv.createMarker(now);
			    };
			    // Event-Date Utilities
			    // -----------------------------------------------------------------------------------------------------------------
			    // Given an event's allDay status and start date, return what its fallback end date should be.
			    // TODO: rename to computeDefaultEventEnd
			    Calendar.prototype.getDefaultEventEnd = function (allDay, marker) {
			        var end = marker;
			        if (allDay) {
			            end = startOfDay(end);
			            end = this.dateEnv.add(end, this.defaultAllDayEventDuration);
			        }
			        else {
			            end = this.dateEnv.add(end, this.defaultTimedEventDuration);
			        }
			        return end;
			    };
			    // Public Events API
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.addEvent = function (eventInput, sourceInput) {
			        if (eventInput instanceof EventApi) {
			            var def = eventInput._def;
			            var instance = eventInput._instance;
			            // not already present? don't want to add an old snapshot
			            if (!this.state.eventStore.defs[def.defId]) {
			                this.dispatch({
			                    type: 'ADD_EVENTS',
			                    eventStore: eventTupleToStore({ def: def, instance: instance }) // TODO: better util for two args?
			                });
			            }
			            return eventInput;
			        }
			        var sourceId;
			        if (sourceInput instanceof EventSourceApi) {
			            sourceId = sourceInput.internalEventSource.sourceId;
			        }
			        else if (sourceInput != null) {
			            var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
			            if (!sourceApi) {
			                console.warn('Could not find an event source with ID "' + sourceInput + '"'); // TODO: test
			                return null;
			            }
			            else {
			                sourceId = sourceApi.internalEventSource.sourceId;
			            }
			        }
			        var tuple = parseEvent(eventInput, sourceId, this);
			        if (tuple) {
			            this.dispatch({
			                type: 'ADD_EVENTS',
			                eventStore: eventTupleToStore(tuple)
			            });
			            return new EventApi(this, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
			        }
			        return null;
			    };
			    // TODO: optimize
			    Calendar.prototype.getEventById = function (id) {
			        var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
			        id = String(id);
			        for (var defId in defs) {
			            var def = defs[defId];
			            if (def.publicId === id) {
			                if (def.recurringDef) {
			                    return new EventApi(this, def, null);
			                }
			                else {
			                    for (var instanceId in instances) {
			                        var instance = instances[instanceId];
			                        if (instance.defId === def.defId) {
			                            return new EventApi(this, def, instance);
			                        }
			                    }
			                }
			            }
			        }
			        return null;
			    };
			    Calendar.prototype.getEvents = function () {
			        var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
			        var eventApis = [];
			        for (var id in instances) {
			            var instance = instances[id];
			            var def = defs[instance.defId];
			            eventApis.push(new EventApi(this, def, instance));
			        }
			        return eventApis;
			    };
			    Calendar.prototype.removeAllEvents = function () {
			        this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
			    };
			    Calendar.prototype.rerenderEvents = function () {
			        this.dispatch({ type: 'RESET_EVENTS' });
			    };
			    // Public Event Sources API
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.getEventSources = function () {
			        var sourceHash = this.state.eventSources;
			        var sourceApis = [];
			        for (var internalId in sourceHash) {
			            sourceApis.push(new EventSourceApi(this, sourceHash[internalId]));
			        }
			        return sourceApis;
			    };
			    Calendar.prototype.getEventSourceById = function (id) {
			        var sourceHash = this.state.eventSources;
			        id = String(id);
			        for (var sourceId in sourceHash) {
			            if (sourceHash[sourceId].publicId === id) {
			                return new EventSourceApi(this, sourceHash[sourceId]);
			            }
			        }
			        return null;
			    };
			    Calendar.prototype.addEventSource = function (sourceInput) {
			        if (sourceInput instanceof EventSourceApi) {
			            // not already present? don't want to add an old snapshot
			            if (!this.state.eventSources[sourceInput.internalEventSource.sourceId]) {
			                this.dispatch({
			                    type: 'ADD_EVENT_SOURCES',
			                    sources: [sourceInput.internalEventSource]
			                });
			            }
			            return sourceInput;
			        }
			        var eventSource = parseEventSource(sourceInput, this);
			        if (eventSource) { // TODO: error otherwise?
			            this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
			            return new EventSourceApi(this, eventSource);
			        }
			        return null;
			    };
			    Calendar.prototype.removeAllEventSources = function () {
			        this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
			    };
			    Calendar.prototype.refetchEvents = function () {
			        this.dispatch({ type: 'FETCH_EVENT_SOURCES' });
			    };
			    // Scroll
			    // -----------------------------------------------------------------------------------------------------------------
			    Calendar.prototype.scrollToTime = function (timeInput) {
			        var duration = createDuration(timeInput);
			        if (duration) {
			            this.component.view.scrollToDuration(duration);
			        }
			    };
			    return Calendar;
			}());
			EmitterMixin.mixInto(Calendar);
			// for memoizers
			// -----------------------------------------------------------------------------------------------------------------
			function buildComponentContext$1(theme, dateEnv, options) {
			    return new ComponentContext(this, theme, dateEnv, options, null);
			}
			function buildDateEnv(locale, timeZone, namedTimeZoneImpl, firstDay, weekNumberCalculation, weekLabel, cmdFormatter) {
			    return new DateEnv({
			        calendarSystem: 'gregory',
			        timeZone: timeZone,
			        namedTimeZoneImpl: namedTimeZoneImpl,
			        locale: locale,
			        weekNumberCalculation: weekNumberCalculation,
			        firstDay: firstDay,
			        weekLabel: weekLabel,
			        cmdFormatter: cmdFormatter
			    });
			}
			function buildTheme(calendarOptions) {
			    var themeClass = this.pluginSystem.hooks.themeClasses[calendarOptions.themeSystem] || StandardTheme;
			    return new themeClass(calendarOptions);
			}
			function buildDelayedRerender(wait) {
			    var func = this.tryRerender.bind(this);
			    if (wait != null) {
			        func = debounce(func, wait);
			    }
			    return func;
			}
			function buildEventUiBySource(eventSources) {
			    return mapHash(eventSources, function (eventSource) {
			        return eventSource.ui;
			    });
			}
			function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
			    var eventUiBases = { '': eventUiSingleBase };
			    for (var defId in eventDefs) {
			        var def = eventDefs[defId];
			        if (def.sourceId && eventUiBySource[def.sourceId]) {
			            eventUiBases[defId] = eventUiBySource[def.sourceId];
			        }
			    }
			    return eventUiBases;
			}

			var View = /** @class */ (function (_super) {
			    __extends(View, _super);
			    function View(viewSpec, parentEl) {
			        var _this = _super.call(this, createElement('div', { className: 'fc-view fc-' + viewSpec.type + '-view' })) || this;
			        _this.renderDatesMem = memoizeRendering(_this.renderDatesWrap, _this.unrenderDatesWrap);
			        _this.renderBusinessHoursMem = memoizeRendering(_this.renderBusinessHours, _this.unrenderBusinessHours, [_this.renderDatesMem]);
			        _this.renderDateSelectionMem = memoizeRendering(_this.renderDateSelectionWrap, _this.unrenderDateSelectionWrap, [_this.renderDatesMem]);
			        _this.renderEventsMem = memoizeRendering(_this.renderEvents, _this.unrenderEvents, [_this.renderDatesMem]);
			        _this.renderEventSelectionMem = memoizeRendering(_this.renderEventSelectionWrap, _this.unrenderEventSelectionWrap, [_this.renderEventsMem]);
			        _this.renderEventDragMem = memoizeRendering(_this.renderEventDragWrap, _this.unrenderEventDragWrap, [_this.renderDatesMem]);
			        _this.renderEventResizeMem = memoizeRendering(_this.renderEventResizeWrap, _this.unrenderEventResizeWrap, [_this.renderDatesMem]);
			        _this.viewSpec = viewSpec;
			        _this.type = viewSpec.type;
			        parentEl.appendChild(_this.el);
			        _this.initialize();
			        return _this;
			    }
			    View.prototype.initialize = function () {
			    };
			    Object.defineProperty(View.prototype, "activeStart", {
			        // Date Setting/Unsetting
			        // -----------------------------------------------------------------------------------------------------------------
			        get: function () {
			            return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.start);
			        },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(View.prototype, "activeEnd", {
			        get: function () {
			            return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.end);
			        },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(View.prototype, "currentStart", {
			        get: function () {
			            return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.start);
			        },
			        enumerable: true,
			        configurable: true
			    });
			    Object.defineProperty(View.prototype, "currentEnd", {
			        get: function () {
			            return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.end);
			        },
			        enumerable: true,
			        configurable: true
			    });
			    // General Rendering
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.render = function (props, context) {
			        this.renderDatesMem(props.dateProfile);
			        this.renderBusinessHoursMem(props.businessHours);
			        this.renderDateSelectionMem(props.dateSelection);
			        this.renderEventsMem(props.eventStore);
			        this.renderEventSelectionMem(props.eventSelection);
			        this.renderEventDragMem(props.eventDrag);
			        this.renderEventResizeMem(props.eventResize);
			    };
			    View.prototype.beforeUpdate = function () {
			        this.addScroll(this.queryScroll());
			    };
			    View.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        this.renderDatesMem.unrender(); // should unrender everything else
			    };
			    // Sizing
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.updateSize = function (isResize, viewHeight, isAuto) {
			        var calendar = this.context.calendar;
			        if (isResize) {
			            this.addScroll(this.queryScroll()); // NOTE: same code as in beforeUpdate
			        }
			        if (isResize || // HACKS...
			            calendar.isViewUpdated ||
			            calendar.isDatesUpdated ||
			            calendar.isEventsUpdated) {
			            // sort of the catch-all sizing
			            // anything that might cause dimension changes
			            this.updateBaseSize(isResize, viewHeight, isAuto);
			        }
			        // NOTE: popScroll is called by CalendarComponent
			    };
			    View.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
			    };
			    // Date Rendering
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.renderDatesWrap = function (dateProfile) {
			        this.renderDates(dateProfile);
			        this.addScroll({
			            duration: createDuration(this.context.options.scrollTime)
			        });
			    };
			    View.prototype.unrenderDatesWrap = function () {
			        this.stopNowIndicator();
			        this.unrenderDates();
			    };
			    View.prototype.renderDates = function (dateProfile) { };
			    View.prototype.unrenderDates = function () { };
			    // Business Hours
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.renderBusinessHours = function (businessHours) { };
			    View.prototype.unrenderBusinessHours = function () { };
			    // Date Selection
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.renderDateSelectionWrap = function (selection) {
			        if (selection) {
			            this.renderDateSelection(selection);
			        }
			    };
			    View.prototype.unrenderDateSelectionWrap = function (selection) {
			        if (selection) {
			            this.unrenderDateSelection(selection);
			        }
			    };
			    View.prototype.renderDateSelection = function (selection) { };
			    View.prototype.unrenderDateSelection = function (selection) { };
			    // Event Rendering
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.renderEvents = function (eventStore) { };
			    View.prototype.unrenderEvents = function () { };
			    // util for subclasses
			    View.prototype.sliceEvents = function (eventStore, allDay) {
			        var props = this.props;
			        return sliceEventStore(eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? this.context.nextDayThreshold : null).fg;
			    };
			    // Event Selection
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.renderEventSelectionWrap = function (instanceId) {
			        if (instanceId) {
			            this.renderEventSelection(instanceId);
			        }
			    };
			    View.prototype.unrenderEventSelectionWrap = function (instanceId) {
			        if (instanceId) {
			            this.unrenderEventSelection(instanceId);
			        }
			    };
			    View.prototype.renderEventSelection = function (instanceId) { };
			    View.prototype.unrenderEventSelection = function (instanceId) { };
			    // Event Drag
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.renderEventDragWrap = function (state) {
			        if (state) {
			            this.renderEventDrag(state);
			        }
			    };
			    View.prototype.unrenderEventDragWrap = function (state) {
			        if (state) {
			            this.unrenderEventDrag(state);
			        }
			    };
			    View.prototype.renderEventDrag = function (state) { };
			    View.prototype.unrenderEventDrag = function (state) { };
			    // Event Resize
			    // -----------------------------------------------------------------------------------------------------------------
			    View.prototype.renderEventResizeWrap = function (state) {
			        if (state) {
			            this.renderEventResize(state);
			        }
			    };
			    View.prototype.unrenderEventResizeWrap = function (state) {
			        if (state) {
			            this.unrenderEventResize(state);
			        }
			    };
			    View.prototype.renderEventResize = function (state) { };
			    View.prototype.unrenderEventResize = function (state) { };
			    /* Now Indicator
			    ------------------------------------------------------------------------------------------------------------------*/
			    // Immediately render the current time indicator and begins re-rendering it at an interval,
			    // which is defined by this.getNowIndicatorUnit().
			    // TODO: somehow do this for the current whole day's background too
			    // USAGE: must be called manually from subclasses' render methods! don't need to call stopNowIndicator tho
			    View.prototype.startNowIndicator = function (dateProfile, dateProfileGenerator) {
			        var _this = this;
			        var _a = this.context, calendar = _a.calendar, dateEnv = _a.dateEnv, options = _a.options;
			        var unit;
			        var update;
			        var delay; // ms wait value
			        if (options.nowIndicator && !this.initialNowDate) {
			            unit = this.getNowIndicatorUnit(dateProfile, dateProfileGenerator);
			            if (unit) {
			                update = this.updateNowIndicator.bind(this);
			                this.initialNowDate = calendar.getNow();
			                this.initialNowQueriedMs = new Date().valueOf();
			                // wait until the beginning of the next interval
			                delay = dateEnv.add(dateEnv.startOf(this.initialNowDate, unit), createDuration(1, unit)).valueOf() - this.initialNowDate.valueOf();
			                // TODO: maybe always use setTimeout, waiting until start of next unit
			                this.nowIndicatorTimeoutID = setTimeout(function () {
			                    _this.nowIndicatorTimeoutID = null;
			                    update();
			                    if (unit === 'second') {
			                        delay = 1000; // every second
			                    }
			                    else {
			                        delay = 1000 * 60; // otherwise, every minute
			                    }
			                    _this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
			                }, delay);
			            }
			            // rendering will be initiated in updateSize
			        }
			    };
			    // rerenders the now indicator, computing the new current time from the amount of time that has passed
			    // since the initial getNow call.
			    View.prototype.updateNowIndicator = function () {
			        if (this.props.dateProfile && // a way to determine if dates were rendered yet
			            this.initialNowDate // activated before?
			        ) {
			            this.unrenderNowIndicator(); // won't unrender if unnecessary
			            this.renderNowIndicator(addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs));
			            this.isNowIndicatorRendered = true;
			        }
			    };
			    // Immediately unrenders the view's current time indicator and stops any re-rendering timers.
			    // Won't cause side effects if indicator isn't rendered.
			    View.prototype.stopNowIndicator = function () {
			        if (this.nowIndicatorTimeoutID) {
			            clearTimeout(this.nowIndicatorTimeoutID);
			            this.nowIndicatorTimeoutID = null;
			        }
			        if (this.nowIndicatorIntervalID) {
			            clearInterval(this.nowIndicatorIntervalID);
			            this.nowIndicatorIntervalID = null;
			        }
			        if (this.isNowIndicatorRendered) {
			            this.unrenderNowIndicator();
			            this.isNowIndicatorRendered = false;
			        }
			    };
			    View.prototype.getNowIndicatorUnit = function (dateProfile, dateProfileGenerator) {
			        // subclasses should implement
			    };
			    // Renders a current time indicator at the given datetime
			    View.prototype.renderNowIndicator = function (date) {
			        // SUBCLASSES MUST PASS TO CHILDREN!
			    };
			    // Undoes the rendering actions from renderNowIndicator
			    View.prototype.unrenderNowIndicator = function () {
			        // SUBCLASSES MUST PASS TO CHILDREN!
			    };
			    /* Scroller
			    ------------------------------------------------------------------------------------------------------------------*/
			    View.prototype.addScroll = function (scroll, isForced) {
			        if (isForced) {
			            scroll.isForced = isForced;
			        }
			        __assign(this.queuedScroll || (this.queuedScroll = {}), scroll);
			    };
			    View.prototype.popScroll = function (isResize) {
			        this.applyQueuedScroll(isResize);
			        this.queuedScroll = null;
			    };
			    View.prototype.applyQueuedScroll = function (isResize) {
			        if (this.queuedScroll) {
			            this.applyScroll(this.queuedScroll, isResize);
			        }
			    };
			    View.prototype.queryScroll = function () {
			        var scroll = {};
			        if (this.props.dateProfile) { // dates rendered yet?
			            __assign(scroll, this.queryDateScroll());
			        }
			        return scroll;
			    };
			    View.prototype.applyScroll = function (scroll, isResize) {
			        var duration = scroll.duration, isForced = scroll.isForced;
			        if (duration != null && !isForced) {
			            delete scroll.duration;
			            if (this.props.dateProfile) { // dates rendered yet?
			                __assign(scroll, this.computeDateScroll(duration));
			            }
			        }
			        if (this.props.dateProfile) { // dates rendered yet?
			            this.applyDateScroll(scroll);
			        }
			    };
			    View.prototype.computeDateScroll = function (duration) {
			        return {}; // subclasses must implement
			    };
			    View.prototype.queryDateScroll = function () {
			        return {}; // subclasses must implement
			    };
			    View.prototype.applyDateScroll = function (scroll) {
			        // subclasses must implement
			    };
			    // for API
			    View.prototype.scrollToDuration = function (duration) {
			        this.applyScroll({ duration: duration }, false);
			    };
			    return View;
			}(DateComponent));
			EmitterMixin.mixInto(View);
			View.prototype.usesMinMaxTime = false;
			View.prototype.dateProfileGeneratorClass = DateProfileGenerator;

			var FgEventRenderer = /** @class */ (function () {
			    function FgEventRenderer() {
			        this.segs = [];
			        this.isSizeDirty = false;
			    }
			    FgEventRenderer.prototype.renderSegs = function (context, segs, mirrorInfo) {
			        this.context = context;
			        this.rangeUpdated(); // called too frequently :(
			        // render an `.el` on each seg
			        // returns a subset of the segs. segs that were actually rendered
			        segs = this.renderSegEls(segs, mirrorInfo);
			        this.segs = segs;
			        this.attachSegs(segs, mirrorInfo);
			        this.isSizeDirty = true;
			        triggerRenderedSegs(this.context, this.segs, Boolean(mirrorInfo));
			    };
			    FgEventRenderer.prototype.unrender = function (context, _segs, mirrorInfo) {
			        triggerWillRemoveSegs(this.context, this.segs, Boolean(mirrorInfo));
			        this.detachSegs(this.segs);
			        this.segs = [];
			    };
			    // Updates values that rely on options and also relate to range
			    FgEventRenderer.prototype.rangeUpdated = function () {
			        var options = this.context.options;
			        var displayEventTime;
			        var displayEventEnd;
			        this.eventTimeFormat = createFormatter(options.eventTimeFormat || this.computeEventTimeFormat(), options.defaultRangeSeparator);
			        displayEventTime = options.displayEventTime;
			        if (displayEventTime == null) {
			            displayEventTime = this.computeDisplayEventTime(); // might be based off of range
			        }
			        displayEventEnd = options.displayEventEnd;
			        if (displayEventEnd == null) {
			            displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
			        }
			        this.displayEventTime = displayEventTime;
			        this.displayEventEnd = displayEventEnd;
			    };
			    // Renders and assigns an `el` property for each foreground event segment.
			    // Only returns segments that successfully rendered.
			    FgEventRenderer.prototype.renderSegEls = function (segs, mirrorInfo) {
			        var html = '';
			        var i;
			        if (segs.length) { // don't build an empty html string
			            // build a large concatenation of event segment HTML
			            for (i = 0; i < segs.length; i++) {
			                html += this.renderSegHtml(segs[i], mirrorInfo);
			            }
			            // Grab individual elements from the combined HTML string. Use each as the default rendering.
			            // Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
			            htmlToElements(html).forEach(function (el, i) {
			                var seg = segs[i];
			                if (el) {
			                    seg.el = el;
			                }
			            });
			            segs = filterSegsViaEls(this.context, segs, Boolean(mirrorInfo));
			        }
			        return segs;
			    };
			    // Generic utility for generating the HTML classNames for an event segment's element
			    FgEventRenderer.prototype.getSegClasses = function (seg, isDraggable, isResizable, mirrorInfo) {
			        var classes = [
			            'fc-event',
			            seg.isStart ? 'fc-start' : 'fc-not-start',
			            seg.isEnd ? 'fc-end' : 'fc-not-end'
			        ].concat(seg.eventRange.ui.classNames);
			        if (isDraggable) {
			            classes.push('fc-draggable');
			        }
			        if (isResizable) {
			            classes.push('fc-resizable');
			        }
			        if (mirrorInfo) {
			            classes.push('fc-mirror');
			            if (mirrorInfo.isDragging) {
			                classes.push('fc-dragging');
			            }
			            if (mirrorInfo.isResizing) {
			                classes.push('fc-resizing');
			            }
			        }
			        return classes;
			    };
			    // Compute the text that should be displayed on an event's element.
			    // `range` can be the Event object itself, or something range-like, with at least a `start`.
			    // If event times are disabled, or the event has no time, will return a blank string.
			    // If not specified, formatter will default to the eventTimeFormat setting,
			    // and displayEnd will default to the displayEventEnd setting.
			    FgEventRenderer.prototype.getTimeText = function (eventRange, formatter, displayEnd) {
			        var def = eventRange.def, instance = eventRange.instance;
			        return this._getTimeText(instance.range.start, def.hasEnd ? instance.range.end : null, def.allDay, formatter, displayEnd, instance.forcedStartTzo, instance.forcedEndTzo);
			    };
			    FgEventRenderer.prototype._getTimeText = function (start, end, allDay, formatter, displayEnd, forcedStartTzo, forcedEndTzo) {
			        var dateEnv = this.context.dateEnv;
			        if (formatter == null) {
			            formatter = this.eventTimeFormat;
			        }
			        if (displayEnd == null) {
			            displayEnd = this.displayEventEnd;
			        }
			        if (this.displayEventTime && !allDay) {
			            if (displayEnd && end) {
			                return dateEnv.formatRange(start, end, formatter, {
			                    forcedStartTzo: forcedStartTzo,
			                    forcedEndTzo: forcedEndTzo
			                });
			            }
			            else {
			                return dateEnv.format(start, formatter, {
			                    forcedTzo: forcedStartTzo
			                });
			            }
			        }
			        return '';
			    };
			    FgEventRenderer.prototype.computeEventTimeFormat = function () {
			        return {
			            hour: 'numeric',
			            minute: '2-digit',
			            omitZeroMinute: true
			        };
			    };
			    FgEventRenderer.prototype.computeDisplayEventTime = function () {
			        return true;
			    };
			    FgEventRenderer.prototype.computeDisplayEventEnd = function () {
			        return true;
			    };
			    // Utility for generating event skin-related CSS properties
			    FgEventRenderer.prototype.getSkinCss = function (ui) {
			        return {
			            'background-color': ui.backgroundColor,
			            'border-color': ui.borderColor,
			            color: ui.textColor
			        };
			    };
			    FgEventRenderer.prototype.sortEventSegs = function (segs) {
			        var specs = this.context.eventOrderSpecs;
			        var objs = segs.map(buildSegCompareObj);
			        objs.sort(function (obj0, obj1) {
			            return compareByFieldSpecs(obj0, obj1, specs);
			        });
			        return objs.map(function (c) {
			            return c._seg;
			        });
			    };
			    FgEventRenderer.prototype.computeSizes = function (force) {
			        if (force || this.isSizeDirty) {
			            this.computeSegSizes(this.segs);
			        }
			    };
			    FgEventRenderer.prototype.assignSizes = function (force) {
			        if (force || this.isSizeDirty) {
			            this.assignSegSizes(this.segs);
			            this.isSizeDirty = false;
			        }
			    };
			    FgEventRenderer.prototype.computeSegSizes = function (segs) {
			    };
			    FgEventRenderer.prototype.assignSegSizes = function (segs) {
			    };
			    // Manipulation on rendered segs
			    FgEventRenderer.prototype.hideByHash = function (hash) {
			        if (hash) {
			            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
			                var seg = _a[_i];
			                if (hash[seg.eventRange.instance.instanceId]) {
			                    seg.el.style.visibility = 'hidden';
			                }
			            }
			        }
			    };
			    FgEventRenderer.prototype.showByHash = function (hash) {
			        if (hash) {
			            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
			                var seg = _a[_i];
			                if (hash[seg.eventRange.instance.instanceId]) {
			                    seg.el.style.visibility = '';
			                }
			            }
			        }
			    };
			    FgEventRenderer.prototype.selectByInstanceId = function (instanceId) {
			        if (instanceId) {
			            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
			                var seg = _a[_i];
			                var eventInstance = seg.eventRange.instance;
			                if (eventInstance && eventInstance.instanceId === instanceId &&
			                    seg.el // necessary?
			                ) {
			                    seg.el.classList.add('fc-selected');
			                }
			            }
			        }
			    };
			    FgEventRenderer.prototype.unselectByInstanceId = function (instanceId) {
			        if (instanceId) {
			            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
			                var seg = _a[_i];
			                if (seg.el) { // necessary?
			                    seg.el.classList.remove('fc-selected');
			                }
			            }
			        }
			    };
			    return FgEventRenderer;
			}());
			// returns a object with all primitive props that can be compared
			function buildSegCompareObj(seg) {
			    var eventDef = seg.eventRange.def;
			    var range = seg.eventRange.instance.range;
			    var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
			    var end = range.end ? range.end.valueOf() : 0; // "
			    return __assign({}, eventDef.extendedProps, eventDef, { id: eventDef.publicId, start: start,
			        end: end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg // for later retrieval
			     });
			}

			/*
			TODO: when refactoring this class, make a new FillRenderer instance for each `type`
			*/
			var FillRenderer = /** @class */ (function () {
			    function FillRenderer() {
			        this.fillSegTag = 'div';
			        this.dirtySizeFlags = {};
			        this.containerElsByType = {};
			        this.segsByType = {};
			    }
			    FillRenderer.prototype.getSegsByType = function (type) {
			        return this.segsByType[type] || [];
			    };
			    FillRenderer.prototype.renderSegs = function (type, context, segs) {
			        var _a;
			        this.context = context;
			        var renderedSegs = this.renderSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs
			        var containerEls = this.attachSegs(type, renderedSegs);
			        if (containerEls) {
			            (_a = (this.containerElsByType[type] || (this.containerElsByType[type] = []))).push.apply(_a, containerEls);
			        }
			        this.segsByType[type] = renderedSegs;
			        if (type === 'bgEvent') {
			            triggerRenderedSegs(context, renderedSegs, false); // isMirror=false
			        }
			        this.dirtySizeFlags[type] = true;
			    };
			    // Unrenders a specific type of fill that is currently rendered on the grid
			    FillRenderer.prototype.unrender = function (type, context) {
			        var segs = this.segsByType[type];
			        if (segs) {
			            if (type === 'bgEvent') {
			                triggerWillRemoveSegs(context, segs, false); // isMirror=false
			            }
			            this.detachSegs(type, segs);
			        }
			    };
			    // Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
			    // Only returns segments that successfully rendered.
			    FillRenderer.prototype.renderSegEls = function (type, segs) {
			        var _this = this;
			        var html = '';
			        var i;
			        if (segs.length) {
			            // build a large concatenation of segment HTML
			            for (i = 0; i < segs.length; i++) {
			                html += this.renderSegHtml(type, segs[i]);
			            }
			            // Grab individual elements from the combined HTML string. Use each as the default rendering.
			            // Then, compute the 'el' for each segment.
			            htmlToElements(html).forEach(function (el, i) {
			                var seg = segs[i];
			                if (el) {
			                    seg.el = el;
			                }
			            });
			            if (type === 'bgEvent') {
			                segs = filterSegsViaEls(this.context, segs, false // isMirror. background events can never be mirror elements
			                );
			            }
			            // correct element type? (would be bad if a non-TD were inserted into a table for example)
			            segs = segs.filter(function (seg) {
			                return elementMatches(seg.el, _this.fillSegTag);
			            });
			        }
			        return segs;
			    };
			    // Builds the HTML needed for one fill segment. Generic enough to work with different types.
			    FillRenderer.prototype.renderSegHtml = function (type, seg) {
			        var css = null;
			        var classNames = [];
			        if (type !== 'highlight' && type !== 'businessHours') {
			            css = {
			                'background-color': seg.eventRange.ui.backgroundColor
			            };
			        }
			        if (type !== 'highlight') {
			            classNames = classNames.concat(seg.eventRange.ui.classNames);
			        }
			        if (type === 'businessHours') {
			            classNames.push('fc-bgevent');
			        }
			        else {
			            classNames.push('fc-' + type.toLowerCase());
			        }
			        return '<' + this.fillSegTag +
			            (classNames.length ? ' class="' + classNames.join(' ') + '"' : '') +
			            (css ? ' style="' + cssToStr(css) + '"' : '') +
			            '></' + this.fillSegTag + '>';
			    };
			    FillRenderer.prototype.detachSegs = function (type, segs) {
			        var containerEls = this.containerElsByType[type];
			        if (containerEls) {
			            containerEls.forEach(removeElement);
			            delete this.containerElsByType[type];
			        }
			    };
			    FillRenderer.prototype.computeSizes = function (force) {
			        for (var type in this.segsByType) {
			            if (force || this.dirtySizeFlags[type]) {
			                this.computeSegSizes(this.segsByType[type]);
			            }
			        }
			    };
			    FillRenderer.prototype.assignSizes = function (force) {
			        for (var type in this.segsByType) {
			            if (force || this.dirtySizeFlags[type]) {
			                this.assignSegSizes(this.segsByType[type]);
			            }
			        }
			        this.dirtySizeFlags = {};
			    };
			    FillRenderer.prototype.computeSegSizes = function (segs) {
			    };
			    FillRenderer.prototype.assignSegSizes = function (segs) {
			    };
			    return FillRenderer;
			}());

			// Computes a default column header formatting string if `colFormat` is not explicitly defined
			function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
			    // if more than one week row, or if there are a lot of columns with not much space,
			    // put just the day numbers will be in each cell
			    if (!datesRepDistinctDays || dayCnt > 10) {
			        return { weekday: 'short' }; // "Sat"
			    }
			    else if (dayCnt > 1) {
			        return { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }; // "Sat 11/12"
			    }
			    else {
			        return { weekday: 'long' }; // "Saturday"
			    }
			}
			function renderDateCell(dateMarker, dateProfile, datesRepDistinctDays, colCnt, colHeadFormat, context, colspan, otherAttrs) {
			    var dateEnv = context.dateEnv, theme = context.theme, options = context.options;
			    var isDateValid = rangeContainsMarker(dateProfile.activeRange, dateMarker); // TODO: called too frequently. cache somehow.
			    var classNames = [
			        'fc-day-header',
			        theme.getClass('widgetHeader')
			    ];
			    var innerHtml;
			    if (typeof options.columnHeaderHtml === 'function') {
			        innerHtml = options.columnHeaderHtml(dateEnv.toDate(dateMarker));
			    }
			    else if (typeof options.columnHeaderText === 'function') {
			        innerHtml = htmlEscape(options.columnHeaderText(dateEnv.toDate(dateMarker)));
			    }
			    else {
			        innerHtml = htmlEscape(dateEnv.format(dateMarker, colHeadFormat));
			    }
			    // if only one row of days, the classNames on the header can represent the specific days beneath
			    if (datesRepDistinctDays) {
			        classNames = classNames.concat(
			        // includes the day-of-week class
			        // noThemeHighlight=true (don't highlight the header)
			        getDayClasses(dateMarker, dateProfile, context, true));
			    }
			    else {
			        classNames.push('fc-' + DAY_IDS[dateMarker.getUTCDay()]); // only add the day-of-week class
			    }
			    return '' +
			        '<th class="' + classNames.join(' ') + '"' +
			        ((isDateValid && datesRepDistinctDays) ?
			            ' data-date="' + dateEnv.formatIso(dateMarker, { omitTime: true }) + '"' :
			            '') +
			        (colspan > 1 ?
			            ' colspan="' + colspan + '"' :
			            '') +
			        (otherAttrs ?
			            ' ' + otherAttrs :
			            '') +
			        '>' +
			        (isDateValid ?
			            // don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
			            buildGotoAnchorHtml(options, dateEnv, { date: dateMarker, forceOff: !datesRepDistinctDays || colCnt === 1 }, innerHtml) :
			            // if not valid, display text, but no link
			            innerHtml) +
			        '</th>';
			}

			var DayHeader = /** @class */ (function (_super) {
			    __extends(DayHeader, _super);
			    function DayHeader(parentEl) {
			        var _this = _super.call(this) || this;
			        _this.renderSkeleton = memoizeRendering(_this._renderSkeleton, _this._unrenderSkeleton);
			        _this.parentEl = parentEl;
			        return _this;
			    }
			    DayHeader.prototype.render = function (props, context) {
			        var dates = props.dates, datesRepDistinctDays = props.datesRepDistinctDays;
			        var parts = [];
			        this.renderSkeleton(context);
			        if (props.renderIntroHtml) {
			            parts.push(props.renderIntroHtml());
			        }
			        var colHeadFormat = createFormatter(context.options.columnHeaderFormat ||
			            computeFallbackHeaderFormat(datesRepDistinctDays, dates.length));
			        for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
			            var date = dates_1[_i];
			            parts.push(renderDateCell(date, props.dateProfile, datesRepDistinctDays, dates.length, colHeadFormat, context));
			        }
			        if (context.isRtl) {
			            parts.reverse();
			        }
			        this.thead.innerHTML = '<tr>' + parts.join('') + '</tr>';
			    };
			    DayHeader.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        this.renderSkeleton.unrender();
			    };
			    DayHeader.prototype._renderSkeleton = function (context) {
			        var theme = context.theme;
			        var parentEl = this.parentEl;
			        parentEl.innerHTML = ''; // because might be nbsp
			        parentEl.appendChild(this.el = htmlToElement('<div class="fc-row ' + theme.getClass('headerRow') + '">' +
			            '<table class="' + theme.getClass('tableGrid') + '">' +
			            '<thead></thead>' +
			            '</table>' +
			            '</div>'));
			        this.thead = this.el.querySelector('thead');
			    };
			    DayHeader.prototype._unrenderSkeleton = function () {
			        removeElement(this.el);
			    };
			    return DayHeader;
			}(Component));

			var DaySeries = /** @class */ (function () {
			    function DaySeries(range, dateProfileGenerator) {
			        var date = range.start;
			        var end = range.end;
			        var indices = [];
			        var dates = [];
			        var dayIndex = -1;
			        while (date < end) { // loop each day from start to end
			            if (dateProfileGenerator.isHiddenDay(date)) {
			                indices.push(dayIndex + 0.5); // mark that it's between indices
			            }
			            else {
			                dayIndex++;
			                indices.push(dayIndex);
			                dates.push(date);
			            }
			            date = addDays(date, 1);
			        }
			        this.dates = dates;
			        this.indices = indices;
			        this.cnt = dates.length;
			    }
			    DaySeries.prototype.sliceRange = function (range) {
			        var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
			        var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
			        var clippedFirstIndex = Math.max(0, firstIndex);
			        var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
			        // deal with in-between indices
			        clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
			        clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
			        if (clippedFirstIndex <= clippedLastIndex) {
			            return {
			                firstIndex: clippedFirstIndex,
			                lastIndex: clippedLastIndex,
			                isStart: firstIndex === clippedFirstIndex,
			                isEnd: lastIndex === clippedLastIndex
			            };
			        }
			        else {
			            return null;
			        }
			    };
			    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
			    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
			    // If before the first offset, returns a negative number.
			    // If after the last offset, returns an offset past the last cell offset.
			    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
			    DaySeries.prototype.getDateDayIndex = function (date) {
			        var indices = this.indices;
			        var dayOffset = Math.floor(diffDays(this.dates[0], date));
			        if (dayOffset < 0) {
			            return indices[0] - 1;
			        }
			        else if (dayOffset >= indices.length) {
			            return indices[indices.length - 1] + 1;
			        }
			        else {
			            return indices[dayOffset];
			        }
			    };
			    return DaySeries;
			}());

			var DayTable = /** @class */ (function () {
			    function DayTable(daySeries, breakOnWeeks) {
			        var dates = daySeries.dates;
			        var daysPerRow;
			        var firstDay;
			        var rowCnt;
			        if (breakOnWeeks) {
			            // count columns until the day-of-week repeats
			            firstDay = dates[0].getUTCDay();
			            for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow++) {
			                if (dates[daysPerRow].getUTCDay() === firstDay) {
			                    break;
			                }
			            }
			            rowCnt = Math.ceil(dates.length / daysPerRow);
			        }
			        else {
			            rowCnt = 1;
			            daysPerRow = dates.length;
			        }
			        this.rowCnt = rowCnt;
			        this.colCnt = daysPerRow;
			        this.daySeries = daySeries;
			        this.cells = this.buildCells();
			        this.headerDates = this.buildHeaderDates();
			    }
			    DayTable.prototype.buildCells = function () {
			        var rows = [];
			        for (var row = 0; row < this.rowCnt; row++) {
			            var cells = [];
			            for (var col = 0; col < this.colCnt; col++) {
			                cells.push(this.buildCell(row, col));
			            }
			            rows.push(cells);
			        }
			        return rows;
			    };
			    DayTable.prototype.buildCell = function (row, col) {
			        return {
			            date: this.daySeries.dates[row * this.colCnt + col]
			        };
			    };
			    DayTable.prototype.buildHeaderDates = function () {
			        var dates = [];
			        for (var col = 0; col < this.colCnt; col++) {
			            dates.push(this.cells[0][col].date);
			        }
			        return dates;
			    };
			    DayTable.prototype.sliceRange = function (range) {
			        var colCnt = this.colCnt;
			        var seriesSeg = this.daySeries.sliceRange(range);
			        var segs = [];
			        if (seriesSeg) {
			            var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
			            var index = firstIndex;
			            while (index <= lastIndex) {
			                var row = Math.floor(index / colCnt);
			                var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
			                segs.push({
			                    row: row,
			                    firstCol: index % colCnt,
			                    lastCol: (nextIndex - 1) % colCnt,
			                    isStart: seriesSeg.isStart && index === firstIndex,
			                    isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex
			                });
			                index = nextIndex;
			            }
			        }
			        return segs;
			    };
			    return DayTable;
			}());

			var Slicer = /** @class */ (function () {
			    function Slicer() {
			        this.sliceBusinessHours = memoize(this._sliceBusinessHours);
			        this.sliceDateSelection = memoize(this._sliceDateSpan);
			        this.sliceEventStore = memoize(this._sliceEventStore);
			        this.sliceEventDrag = memoize(this._sliceInteraction);
			        this.sliceEventResize = memoize(this._sliceInteraction);
			    }
			    Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, calendar, component) {
			        var extraArgs = [];
			        for (var _i = 5; _i < arguments.length; _i++) {
			            extraArgs[_i - 5] = arguments[_i];
			        }
			        var eventUiBases = props.eventUiBases;
			        var eventSegs = this.sliceEventStore.apply(this, [props.eventStore, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs));
			        return {
			            dateSelectionSegs: this.sliceDateSelection.apply(this, [props.dateSelection, eventUiBases, component].concat(extraArgs)),
			            businessHourSegs: this.sliceBusinessHours.apply(this, [props.businessHours, dateProfile, nextDayThreshold, calendar, component].concat(extraArgs)),
			            fgEventSegs: eventSegs.fg,
			            bgEventSegs: eventSegs.bg,
			            eventDrag: this.sliceEventDrag.apply(this, [props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
			            eventResize: this.sliceEventResize.apply(this, [props.eventResize, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
			            eventSelection: props.eventSelection
			        }; // TODO: give interactionSegs?
			    };
			    Slicer.prototype.sliceNowDate = function (// does not memoize
			    date, component) {
			        var extraArgs = [];
			        for (var _i = 2; _i < arguments.length; _i++) {
			            extraArgs[_i - 2] = arguments[_i];
			        }
			        return this._sliceDateSpan.apply(this, [{ range: { start: date, end: addMs(date, 1) }, allDay: false },
			            {},
			            component].concat(extraArgs));
			    };
			    Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, calendar, component) {
			        var extraArgs = [];
			        for (var _i = 5; _i < arguments.length; _i++) {
			            extraArgs[_i - 5] = arguments[_i];
			        }
			        if (!businessHours) {
			            return [];
			        }
			        return this._sliceEventStore.apply(this, [expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), calendar),
			            {},
			            dateProfile,
			            nextDayThreshold,
			            component].concat(extraArgs)).bg;
			    };
			    Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold, component) {
			        var extraArgs = [];
			        for (var _i = 5; _i < arguments.length; _i++) {
			            extraArgs[_i - 5] = arguments[_i];
			        }
			        if (eventStore) {
			            var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
			            return {
			                bg: this.sliceEventRanges(rangeRes.bg, component, extraArgs),
			                fg: this.sliceEventRanges(rangeRes.fg, component, extraArgs)
			            };
			        }
			        else {
			            return { bg: [], fg: [] };
			        }
			    };
			    Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold, component) {
			        var extraArgs = [];
			        for (var _i = 5; _i < arguments.length; _i++) {
			            extraArgs[_i - 5] = arguments[_i];
			        }
			        if (!interaction) {
			            return null;
			        }
			        var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
			        return {
			            segs: this.sliceEventRanges(rangeRes.fg, component, extraArgs),
			            affectedInstances: interaction.affectedEvents.instances,
			            isEvent: interaction.isEvent,
			            sourceSeg: interaction.origSeg
			        };
			    };
			    Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, component) {
			        var extraArgs = [];
			        for (var _i = 3; _i < arguments.length; _i++) {
			            extraArgs[_i - 3] = arguments[_i];
			        }
			        if (!dateSpan) {
			            return [];
			        }
			        var eventRange = fabricateEventRange(dateSpan, eventUiBases, component.context.calendar);
			        var segs = this.sliceRange.apply(this, [dateSpan.range].concat(extraArgs));
			        for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
			            var seg = segs_1[_a];
			            seg.component = component;
			            seg.eventRange = eventRange;
			        }
			        return segs;
			    };
			    /*
			    "complete" seg means it has component and eventRange
			    */
			    Slicer.prototype.sliceEventRanges = function (eventRanges, component, // TODO: kill
			    extraArgs) {
			        var segs = [];
			        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
			            var eventRange = eventRanges_1[_i];
			            segs.push.apply(segs, this.sliceEventRange(eventRange, component, extraArgs));
			        }
			        return segs;
			    };
			    /*
			    "complete" seg means it has component and eventRange
			    */
			    Slicer.prototype.sliceEventRange = function (eventRange, component, // TODO: kill
			    extraArgs) {
			        var segs = this.sliceRange.apply(this, [eventRange.range].concat(extraArgs));
			        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
			            var seg = segs_2[_i];
			            seg.component = component;
			            seg.eventRange = eventRange;
			            seg.isStart = eventRange.isStart && seg.isStart;
			            seg.isEnd = eventRange.isEnd && seg.isEnd;
			        }
			        return segs;
			    };
			    return Slicer;
			}());
			/*
			for incorporating minTime/maxTime if appropriate
			TODO: should be part of DateProfile!
			TimelineDateProfile already does this btw
			*/
			function computeActiveRange(dateProfile, isComponentAllDay) {
			    var range = dateProfile.activeRange;
			    if (isComponentAllDay) {
			        return range;
			    }
			    return {
			        start: addMs(range.start, dateProfile.minTime.milliseconds),
			        end: addMs(range.end, dateProfile.maxTime.milliseconds - 864e5) // 864e5 = ms in a day
			    };
			}

			/*!
			FullCalendar Day Grid Plugin v4.4.0
			Docs & License: https://fullcalendar.io/
			(c) 2019 Adam Shaw
			*/

			/*! *****************************************************************************
			Copyright (c) Microsoft Corporation. All rights reserved.
			Licensed under the Apache License, Version 2.0 (the "License"); you may not use
			this file except in compliance with the License. You may obtain a copy of the
			License at http://www.apache.org/licenses/LICENSE-2.0

			THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
			KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
			WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
			MERCHANTABLITY OR NON-INFRINGEMENT.

			See the Apache Version 2.0 License for specific language governing permissions
			and limitations under the License.
			***************************************************************************** */
			/* global Reflect, Promise */

			var extendStatics$1 = function(d, b) {
			    extendStatics$1 = Object.setPrototypeOf ||
			        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
			    return extendStatics$1(d, b);
			};

			function __extends$1(d, b) {
			    extendStatics$1(d, b);
			    function __() { this.constructor = d; }
			    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			}

			var __assign$1 = function() {
			    __assign$1 = Object.assign || function __assign(t) {
			        for (var s, i = 1, n = arguments.length; i < n; i++) {
			            s = arguments[i];
			            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			        }
			        return t;
			    };
			    return __assign$1.apply(this, arguments);
			};

			var DayGridDateProfileGenerator = /** @class */ (function (_super) {
			    __extends$1(DayGridDateProfileGenerator, _super);
			    function DayGridDateProfileGenerator() {
			        return _super !== null && _super.apply(this, arguments) || this;
			    }
			    // Computes the date range that will be rendered.
			    DayGridDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
			        var dateEnv = this.dateEnv;
			        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
			        var start = renderRange.start;
			        var end = renderRange.end;
			        var endOfWeek;
			        // year and month views should be aligned with weeks. this is already done for week
			        if (/^(year|month)$/.test(currentRangeUnit)) {
			            start = dateEnv.startOfWeek(start);
			            // make end-of-week if not already
			            endOfWeek = dateEnv.startOfWeek(end);
			            if (endOfWeek.valueOf() !== end.valueOf()) {
			                end = addWeeks(endOfWeek, 1);
			            }
			        }
			        // ensure 6 weeks
			        if (this.options.monthMode &&
			            this.options.fixedWeekCount) {
			            var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
			            diffWeeks(start, end));
			            end = addWeeks(end, 6 - rowCnt);
			        }
			        return { start: start, end: end };
			    };
			    return DayGridDateProfileGenerator;
			}(DateProfileGenerator));

			/* A rectangular panel that is absolutely positioned over other content
			------------------------------------------------------------------------------------------------------------------------
			Options:
			  - className (string)
			  - content (HTML string, element, or element array)
			  - parentEl
			  - top
			  - left
			  - right (the x coord of where the right edge should be. not a "CSS" right)
			  - autoHide (boolean)
			  - show (callback)
			  - hide (callback)
			*/
			var Popover = /** @class */ (function () {
			    function Popover(options) {
			        var _this = this;
			        this.isHidden = true;
			        this.margin = 10; // the space required between the popover and the edges of the scroll container
			        // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
			        this.documentMousedown = function (ev) {
			            // only hide the popover if the click happened outside the popover
			            if (_this.el && !_this.el.contains(ev.target)) {
			                _this.hide();
			            }
			        };
			        this.options = options;
			    }
			    // Shows the popover on the specified position. Renders it if not already
			    Popover.prototype.show = function () {
			        if (this.isHidden) {
			            if (!this.el) {
			                this.render();
			            }
			            this.el.style.display = '';
			            this.position();
			            this.isHidden = false;
			            this.trigger('show');
			        }
			    };
			    // Hides the popover, through CSS, but does not remove it from the DOM
			    Popover.prototype.hide = function () {
			        if (!this.isHidden) {
			            this.el.style.display = 'none';
			            this.isHidden = true;
			            this.trigger('hide');
			        }
			    };
			    // Creates `this.el` and renders content inside of it
			    Popover.prototype.render = function () {
			        var _this = this;
			        var options = this.options;
			        var el = this.el = createElement('div', {
			            className: 'fc-popover ' + (options.className || ''),
			            style: {
			                top: '0',
			                left: '0'
			            }
			        });
			        if (typeof options.content === 'function') {
			            options.content(el);
			        }
			        options.parentEl.appendChild(el);
			        // when a click happens on anything inside with a 'fc-close' className, hide the popover
			        listenBySelector(el, 'click', '.fc-close', function (ev) {
			            _this.hide();
			        });
			        if (options.autoHide) {
			            document.addEventListener('mousedown', this.documentMousedown);
			        }
			    };
			    // Hides and unregisters any handlers
			    Popover.prototype.destroy = function () {
			        this.hide();
			        if (this.el) {
			            removeElement(this.el);
			            this.el = null;
			        }
			        document.removeEventListener('mousedown', this.documentMousedown);
			    };
			    // Positions the popover optimally, using the top/left/right options
			    Popover.prototype.position = function () {
			        var options = this.options;
			        var el = this.el;
			        var elDims = el.getBoundingClientRect(); // only used for width,height
			        var origin = computeRect(el.offsetParent);
			        var clippingRect = computeClippingRect(options.parentEl);
			        var top; // the "position" (not "offset") values for the popover
			        var left; //
			        // compute top and left
			        top = options.top || 0;
			        if (options.left !== undefined) {
			            left = options.left;
			        }
			        else if (options.right !== undefined) {
			            left = options.right - elDims.width; // derive the left value from the right value
			        }
			        else {
			            left = 0;
			        }
			        // constrain to the view port. if constrained by two edges, give precedence to top/left
			        top = Math.min(top, clippingRect.bottom - elDims.height - this.margin);
			        top = Math.max(top, clippingRect.top + this.margin);
			        left = Math.min(left, clippingRect.right - elDims.width - this.margin);
			        left = Math.max(left, clippingRect.left + this.margin);
			        applyStyle(el, {
			            top: top - origin.top,
			            left: left - origin.left
			        });
			    };
			    // Triggers a callback. Calls a function in the option hash of the same name.
			    // Arguments beyond the first `name` are forwarded on.
			    // TODO: better code reuse for this. Repeat code
			    // can kill this???
			    Popover.prototype.trigger = function (name) {
			        if (this.options[name]) {
			            this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
			        }
			    };
			    return Popover;
			}());

			/* Event-rendering methods for the DayGrid class
			----------------------------------------------------------------------------------------------------------------------*/
			// "Simple" is bad a name. has nothing to do with SimpleDayGrid
			var SimpleDayGridEventRenderer = /** @class */ (function (_super) {
			    __extends$1(SimpleDayGridEventRenderer, _super);
			    function SimpleDayGridEventRenderer() {
			        return _super !== null && _super.apply(this, arguments) || this;
			    }
			    // Builds the HTML to be used for the default element for an individual segment
			    SimpleDayGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
			        var context = this.context;
			        var eventRange = seg.eventRange;
			        var eventDef = eventRange.def;
			        var eventUi = eventRange.ui;
			        var allDay = eventDef.allDay;
			        var isDraggable = computeEventDraggable(context, eventDef, eventUi);
			        var isResizableFromStart = allDay && seg.isStart && computeEventStartResizable(context, eventDef, eventUi);
			        var isResizableFromEnd = allDay && seg.isEnd && computeEventEndResizable(context, eventDef, eventUi);
			        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
			        var skinCss = cssToStr(this.getSkinCss(eventUi));
			        var timeHtml = '';
			        var timeText;
			        var titleHtml;
			        classes.unshift('fc-day-grid-event', 'fc-h-event');
			        // Only display a timed events time if it is the starting segment
			        if (seg.isStart) {
			            timeText = this.getTimeText(eventRange);
			            if (timeText) {
			                timeHtml = '<span class="fc-time">' + htmlEscape(timeText) + '</span>';
			            }
			        }
			        titleHtml =
			            '<span class="fc-title">' +
			                (htmlEscape(eventDef.title || '') || '&nbsp;') + // we always want one line of height
			                '</span>';
			        return '<a class="' + classes.join(' ') + '"' +
			            (eventDef.url ?
			                ' href="' + htmlEscape(eventDef.url) + '"' :
			                '') +
			            (skinCss ?
			                ' style="' + skinCss + '"' :
			                '') +
			            '>' +
			            '<div class="fc-content">' +
			            (context.options.dir === 'rtl' ?
			                titleHtml + ' ' + timeHtml : // put a natural space in between
			                timeHtml + ' ' + titleHtml //
			            ) +
			            '</div>' +
			            (isResizableFromStart ?
			                '<div class="fc-resizer fc-start-resizer"></div>' :
			                '') +
			            (isResizableFromEnd ?
			                '<div class="fc-resizer fc-end-resizer"></div>' :
			                '') +
			            '</a>';
			    };
			    // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
			    SimpleDayGridEventRenderer.prototype.computeEventTimeFormat = function () {
			        return {
			            hour: 'numeric',
			            minute: '2-digit',
			            omitZeroMinute: true,
			            meridiem: 'narrow'
			        };
			    };
			    SimpleDayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
			        return false; // TODO: somehow consider the originating DayGrid's column count
			    };
			    return SimpleDayGridEventRenderer;
			}(FgEventRenderer));

			/* Event-rendering methods for the DayGrid class
			----------------------------------------------------------------------------------------------------------------------*/
			var DayGridEventRenderer = /** @class */ (function (_super) {
			    __extends$1(DayGridEventRenderer, _super);
			    function DayGridEventRenderer(dayGrid) {
			        var _this = _super.call(this) || this;
			        _this.dayGrid = dayGrid;
			        return _this;
			    }
			    // Renders the given foreground event segments onto the grid
			    DayGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
			        var rowStructs = this.rowStructs = this.renderSegRows(segs);
			        // append to each row's content skeleton
			        this.dayGrid.rowEls.forEach(function (rowNode, i) {
			            rowNode.querySelector('.fc-content-skeleton > table').appendChild(rowStructs[i].tbodyEl);
			        });
			        // removes the "more.." events popover
			        if (!mirrorInfo) {
			            this.dayGrid.removeSegPopover();
			        }
			    };
			    // Unrenders all currently rendered foreground event segments
			    DayGridEventRenderer.prototype.detachSegs = function () {
			        var rowStructs = this.rowStructs || [];
			        var rowStruct;
			        while ((rowStruct = rowStructs.pop())) {
			            removeElement(rowStruct.tbodyEl);
			        }
			        this.rowStructs = null;
			    };
			    // Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
			    // Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
			    // PRECONDITION: each segment shoud already have a rendered and assigned `.el`
			    DayGridEventRenderer.prototype.renderSegRows = function (segs) {
			        var rowStructs = [];
			        var segRows;
			        var row;
			        segRows = this.groupSegRows(segs); // group into nested arrays
			        // iterate each row of segment groupings
			        for (row = 0; row < segRows.length; row++) {
			            rowStructs.push(this.renderSegRow(row, segRows[row]));
			        }
			        return rowStructs;
			    };
			    // Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
			    // the segments. Returns object with a bunch of internal data about how the render was calculated.
			    // NOTE: modifies rowSegs
			    DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
			        var isRtl = this.context.isRtl;
			        var dayGrid = this.dayGrid;
			        var colCnt = dayGrid.colCnt;
			        var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
			        var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
			        var tbody = document.createElement('tbody');
			        var segMatrix = []; // lookup for which segments are rendered into which level+col cells
			        var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
			        var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
			        var i;
			        var levelSegs;
			        var col;
			        var tr;
			        var j;
			        var seg;
			        var td;
			        // populates empty cells from the current column (`col`) to `endCol`
			        function emptyCellsUntil(endCol) {
			            while (col < endCol) {
			                // try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
			                td = (loneCellMatrix[i - 1] || [])[col];
			                if (td) {
			                    td.rowSpan = (td.rowSpan || 1) + 1;
			                }
			                else {
			                    td = document.createElement('td');
			                    tr.appendChild(td);
			                }
			                cellMatrix[i][col] = td;
			                loneCellMatrix[i][col] = td;
			                col++;
			            }
			        }
			        for (i = 0; i < levelCnt; i++) { // iterate through all levels
			            levelSegs = segLevels[i];
			            col = 0;
			            tr = document.createElement('tr');
			            segMatrix.push([]);
			            cellMatrix.push([]);
			            loneCellMatrix.push([]);
			            // levelCnt might be 1 even though there are no actual levels. protect against this.
			            // this single empty row is useful for styling.
			            if (levelSegs) {
			                for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
			                    seg = levelSegs[j];
			                    var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
			                    var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
			                    emptyCellsUntil(leftCol);
			                    // create a container that occupies or more columns. append the event element.
			                    td = createElement('td', { className: 'fc-event-container' }, seg.el);
			                    if (leftCol !== rightCol) {
			                        td.colSpan = rightCol - leftCol + 1;
			                    }
			                    else { // a single-column segment
			                        loneCellMatrix[i][col] = td;
			                    }
			                    while (col <= rightCol) {
			                        cellMatrix[i][col] = td;
			                        segMatrix[i][col] = seg;
			                        col++;
			                    }
			                    tr.appendChild(td);
			                }
			            }
			            emptyCellsUntil(colCnt); // finish off the row
			            var introHtml = dayGrid.renderProps.renderIntroHtml();
			            if (introHtml) {
			                if (isRtl) {
			                    appendToElement(tr, introHtml);
			                }
			                else {
			                    prependToElement(tr, introHtml);
			                }
			            }
			            tbody.appendChild(tr);
			        }
			        return {
			            row: row,
			            tbodyEl: tbody,
			            cellMatrix: cellMatrix,
			            segMatrix: segMatrix,
			            segLevels: segLevels,
			            segs: rowSegs
			        };
			    };
			    // Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
			    // NOTE: modifies segs
			    DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
			        var isRtl = this.context.isRtl;
			        var colCnt = this.dayGrid.colCnt;
			        var levels = [];
			        var i;
			        var seg;
			        var j;
			        // Give preference to elements with certain criteria, so they have
			        // a chance to be closer to the top.
			        segs = this.sortEventSegs(segs);
			        for (i = 0; i < segs.length; i++) {
			            seg = segs[i];
			            // loop through levels, starting with the topmost, until the segment doesn't collide with other segments
			            for (j = 0; j < levels.length; j++) {
			                if (!isDaySegCollision(seg, levels[j])) {
			                    break;
			                }
			            }
			            // `j` now holds the desired subrow index
			            seg.level = j;
			            seg.leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol; // for sorting only
			            seg.rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol // for sorting only
			            ;
			            (levels[j] || (levels[j] = [])).push(seg);
			        }
			        // order segments left-to-right. very important if calendar is RTL
			        for (j = 0; j < levels.length; j++) {
			            levels[j].sort(compareDaySegCols);
			        }
			        return levels;
			    };
			    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
			    DayGridEventRenderer.prototype.groupSegRows = function (segs) {
			        var segRows = [];
			        var i;
			        for (i = 0; i < this.dayGrid.rowCnt; i++) {
			            segRows.push([]);
			        }
			        for (i = 0; i < segs.length; i++) {
			            segRows[segs[i].row].push(segs[i]);
			        }
			        return segRows;
			    };
			    // Computes a default `displayEventEnd` value if one is not expliclty defined
			    DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
			        return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
			    };
			    return DayGridEventRenderer;
			}(SimpleDayGridEventRenderer));
			// Computes whether two segments' columns collide. They are assumed to be in the same row.
			function isDaySegCollision(seg, otherSegs) {
			    var i;
			    var otherSeg;
			    for (i = 0; i < otherSegs.length; i++) {
			        otherSeg = otherSegs[i];
			        if (otherSeg.firstCol <= seg.lastCol &&
			            otherSeg.lastCol >= seg.firstCol) {
			            return true;
			        }
			    }
			    return false;
			}
			// A cmp function for determining the leftmost event
			function compareDaySegCols(a, b) {
			    return a.leftCol - b.leftCol;
			}

			var DayGridMirrorRenderer = /** @class */ (function (_super) {
			    __extends$1(DayGridMirrorRenderer, _super);
			    function DayGridMirrorRenderer() {
			        return _super !== null && _super.apply(this, arguments) || this;
			    }
			    DayGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
			        var sourceSeg = mirrorInfo.sourceSeg;
			        var rowStructs = this.rowStructs = this.renderSegRows(segs);
			        // inject each new event skeleton into each associated row
			        this.dayGrid.rowEls.forEach(function (rowNode, row) {
			            var skeletonEl = htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>'); // will be absolutely positioned
			            var skeletonTopEl;
			            var skeletonTop;
			            // If there is an original segment, match the top position. Otherwise, put it at the row's top level
			            if (sourceSeg && sourceSeg.row === row) {
			                skeletonTopEl = sourceSeg.el;
			            }
			            else {
			                skeletonTopEl = rowNode.querySelector('.fc-content-skeleton tbody');
			                if (!skeletonTopEl) { // when no events
			                    skeletonTopEl = rowNode.querySelector('.fc-content-skeleton table');
			                }
			            }
			            skeletonTop = skeletonTopEl.getBoundingClientRect().top -
			                rowNode.getBoundingClientRect().top; // the offsetParent origin
			            skeletonEl.style.top = skeletonTop + 'px';
			            skeletonEl.querySelector('table').appendChild(rowStructs[row].tbodyEl);
			            rowNode.appendChild(skeletonEl);
			        });
			    };
			    return DayGridMirrorRenderer;
			}(DayGridEventRenderer));

			var EMPTY_CELL_HTML = '<td style="pointer-events:none"></td>';
			var DayGridFillRenderer = /** @class */ (function (_super) {
			    __extends$1(DayGridFillRenderer, _super);
			    function DayGridFillRenderer(dayGrid) {
			        var _this = _super.call(this) || this;
			        _this.fillSegTag = 'td'; // override the default tag name
			        _this.dayGrid = dayGrid;
			        return _this;
			    }
			    DayGridFillRenderer.prototype.renderSegs = function (type, context, segs) {
			        // don't render timed background events
			        if (type === 'bgEvent') {
			            segs = segs.filter(function (seg) {
			                return seg.eventRange.def.allDay;
			            });
			        }
			        _super.prototype.renderSegs.call(this, type, context, segs);
			    };
			    DayGridFillRenderer.prototype.attachSegs = function (type, segs) {
			        var els = [];
			        var i;
			        var seg;
			        var skeletonEl;
			        for (i = 0; i < segs.length; i++) {
			            seg = segs[i];
			            skeletonEl = this.renderFillRow(type, seg);
			            this.dayGrid.rowEls[seg.row].appendChild(skeletonEl);
			            els.push(skeletonEl);
			        }
			        return els;
			    };
			    // Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
			    DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
			        var dayGrid = this.dayGrid;
			        var isRtl = this.context.isRtl;
			        var colCnt = dayGrid.colCnt;
			        var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
			        var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
			        var startCol = leftCol;
			        var endCol = rightCol + 1;
			        var className;
			        var skeletonEl;
			        var trEl;
			        if (type === 'businessHours') {
			            className = 'bgevent';
			        }
			        else {
			            className = type.toLowerCase();
			        }
			        skeletonEl = htmlToElement('<div class="fc-' + className + '-skeleton">' +
			            '<table><tr></tr></table>' +
			            '</div>');
			        trEl = skeletonEl.getElementsByTagName('tr')[0];
			        if (startCol > 0) {
			            appendToElement(trEl, 
			            // will create (startCol + 1) td's
			            new Array(startCol + 1).join(EMPTY_CELL_HTML));
			        }
			        seg.el.colSpan = endCol - startCol;
			        trEl.appendChild(seg.el);
			        if (endCol < colCnt) {
			            appendToElement(trEl, 
			            // will create (colCnt - endCol) td's
			            new Array(colCnt - endCol + 1).join(EMPTY_CELL_HTML));
			        }
			        var introHtml = dayGrid.renderProps.renderIntroHtml();
			        if (introHtml) {
			            if (isRtl) {
			                appendToElement(trEl, introHtml);
			            }
			            else {
			                prependToElement(trEl, introHtml);
			            }
			        }
			        return skeletonEl;
			    };
			    return DayGridFillRenderer;
			}(FillRenderer));

			var DayTile = /** @class */ (function (_super) {
			    __extends$1(DayTile, _super);
			    function DayTile(el) {
			        var _this = _super.call(this, el) || this;
			        var eventRenderer = _this.eventRenderer = new DayTileEventRenderer(_this);
			        var renderFrame = _this.renderFrame = memoizeRendering(_this._renderFrame);
			        _this.renderFgEvents = memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderFrame]);
			        _this.renderEventSelection = memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
			        _this.renderEventDrag = memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
			        _this.renderEventResize = memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
			        return _this;
			    }
			    DayTile.prototype.firstContext = function (context) {
			        context.calendar.registerInteractiveComponent(this, {
			            el: this.el,
			            useEventCenter: false
			        });
			    };
			    DayTile.prototype.render = function (props, context) {
			        this.renderFrame(props.date);
			        this.renderFgEvents(context, props.fgSegs);
			        this.renderEventSelection(props.eventSelection);
			        this.renderEventDrag(props.eventDragInstances);
			        this.renderEventResize(props.eventResizeInstances);
			    };
			    DayTile.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        this.renderFrame.unrender(); // should unrender everything else
			        this.context.calendar.unregisterInteractiveComponent(this);
			    };
			    DayTile.prototype._renderFrame = function (date) {
			        var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options;
			        var title = dateEnv.format(date, createFormatter(options.dayPopoverFormat) // TODO: cache
			        );
			        this.el.innerHTML =
			            '<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
			                '<span class="fc-title">' +
			                htmlEscape(title) +
			                '</span>' +
			                '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
			                '</div>' +
			                '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
			                '<div class="fc-event-container"></div>' +
			                '</div>';
			        this.segContainerEl = this.el.querySelector('.fc-event-container');
			    };
			    DayTile.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
			        var date = this.props.date; // HACK
			        if (positionLeft < elWidth && positionTop < elHeight) {
			            return {
			                component: this,
			                dateSpan: {
			                    allDay: true,
			                    range: { start: date, end: addDays(date, 1) }
			                },
			                dayEl: this.el,
			                rect: {
			                    left: 0,
			                    top: 0,
			                    right: elWidth,
			                    bottom: elHeight
			                },
			                layer: 1
			            };
			        }
			    };
			    return DayTile;
			}(DateComponent));
			var DayTileEventRenderer = /** @class */ (function (_super) {
			    __extends$1(DayTileEventRenderer, _super);
			    function DayTileEventRenderer(dayTile) {
			        var _this = _super.call(this) || this;
			        _this.dayTile = dayTile;
			        return _this;
			    }
			    DayTileEventRenderer.prototype.attachSegs = function (segs) {
			        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
			            var seg = segs_1[_i];
			            this.dayTile.segContainerEl.appendChild(seg.el);
			        }
			    };
			    DayTileEventRenderer.prototype.detachSegs = function (segs) {
			        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
			            var seg = segs_2[_i];
			            removeElement(seg.el);
			        }
			    };
			    return DayTileEventRenderer;
			}(SimpleDayGridEventRenderer));

			var DayBgRow = /** @class */ (function () {
			    function DayBgRow(context) {
			        this.context = context;
			    }
			    DayBgRow.prototype.renderHtml = function (props) {
			        var parts = [];
			        if (props.renderIntroHtml) {
			            parts.push(props.renderIntroHtml());
			        }
			        for (var _i = 0, _a = props.cells; _i < _a.length; _i++) {
			            var cell = _a[_i];
			            parts.push(renderCellHtml(cell.date, props.dateProfile, this.context, cell.htmlAttrs));
			        }
			        if (!props.cells.length) {
			            parts.push('<td class="fc-day ' + this.context.theme.getClass('widgetContent') + '"></td>');
			        }
			        if (this.context.options.dir === 'rtl') {
			            parts.reverse();
			        }
			        return '<tr>' + parts.join('') + '</tr>';
			    };
			    return DayBgRow;
			}());
			function renderCellHtml(date, dateProfile, context, otherAttrs) {
			    var dateEnv = context.dateEnv, theme = context.theme;
			    var isDateValid = rangeContainsMarker(dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
			    var classes = getDayClasses(date, dateProfile, context);
			    classes.unshift('fc-day', theme.getClass('widgetContent'));
			    return '<td class="' + classes.join(' ') + '"' +
			        (isDateValid ?
			            ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
			            '') +
			        (otherAttrs ?
			            ' ' + otherAttrs :
			            '') +
			        '></td>';
			}

			var DAY_NUM_FORMAT = createFormatter({ day: 'numeric' });
			var WEEK_NUM_FORMAT = createFormatter({ week: 'numeric' });
			var DayGrid = /** @class */ (function (_super) {
			    __extends$1(DayGrid, _super);
			    function DayGrid(el, renderProps) {
			        var _this = _super.call(this, el) || this;
			        _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
			        _this.isCellSizesDirty = false;
			        _this.renderProps = renderProps;
			        var eventRenderer = _this.eventRenderer = new DayGridEventRenderer(_this);
			        var fillRenderer = _this.fillRenderer = new DayGridFillRenderer(_this);
			        _this.mirrorRenderer = new DayGridMirrorRenderer(_this);
			        var renderCells = _this.renderCells = memoizeRendering(_this._renderCells, _this._unrenderCells);
			        _this.renderBusinessHours = memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderCells]);
			        _this.renderDateSelection = memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'), [renderCells]);
			        _this.renderBgEvents = memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderCells]);
			        _this.renderFgEvents = memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderCells]);
			        _this.renderEventSelection = memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
			        _this.renderEventDrag = memoizeRendering(_this._renderEventDrag, _this._unrenderEventDrag, [renderCells]);
			        _this.renderEventResize = memoizeRendering(_this._renderEventResize, _this._unrenderEventResize, [renderCells]);
			        return _this;
			    }
			    DayGrid.prototype.render = function (props, context) {
			        var cells = props.cells;
			        this.rowCnt = cells.length;
			        this.colCnt = cells[0].length;
			        this.renderCells(cells, props.isRigid);
			        this.renderBusinessHours(context, props.businessHourSegs);
			        this.renderDateSelection(context, props.dateSelectionSegs);
			        this.renderBgEvents(context, props.bgEventSegs);
			        this.renderFgEvents(context, props.fgEventSegs);
			        this.renderEventSelection(props.eventSelection);
			        this.renderEventDrag(props.eventDrag);
			        this.renderEventResize(props.eventResize);
			        if (this.segPopoverTile) {
			            this.updateSegPopoverTile();
			        }
			    };
			    DayGrid.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        this.renderCells.unrender(); // will unrender everything else
			    };
			    DayGrid.prototype.getCellRange = function (row, col) {
			        var start = this.props.cells[row][col].date;
			        var end = addDays(start, 1);
			        return { start: start, end: end };
			    };
			    DayGrid.prototype.updateSegPopoverTile = function (date, segs) {
			        var ownProps = this.props;
			        this.segPopoverTile.receiveProps({
			            date: date || this.segPopoverTile.props.date,
			            fgSegs: segs || this.segPopoverTile.props.fgSegs,
			            eventSelection: ownProps.eventSelection,
			            eventDragInstances: ownProps.eventDrag ? ownProps.eventDrag.affectedInstances : null,
			            eventResizeInstances: ownProps.eventResize ? ownProps.eventResize.affectedInstances : null
			        }, this.context);
			    };
			    /* Date Rendering
			    ------------------------------------------------------------------------------------------------------------------*/
			    DayGrid.prototype._renderCells = function (cells, isRigid) {
			        var _a = this.context, calendar = _a.calendar, view = _a.view, isRtl = _a.isRtl, dateEnv = _a.dateEnv;
			        var _b = this, rowCnt = _b.rowCnt, colCnt = _b.colCnt;
			        var html = '';
			        var row;
			        var col;
			        for (row = 0; row < rowCnt; row++) {
			            html += this.renderDayRowHtml(row, isRigid);
			        }
			        this.el.innerHTML = html;
			        this.rowEls = findElements(this.el, '.fc-row');
			        this.cellEls = findElements(this.el, '.fc-day, .fc-disabled-day');
			        if (isRtl) {
			            this.cellEls.reverse();
			        }
			        this.rowPositions = new PositionCache(this.el, this.rowEls, false, true // vertical
			        );
			        this.colPositions = new PositionCache(this.el, this.cellEls.slice(0, colCnt), // only the first row
			        true, false // horizontal
			        );
			        // trigger dayRender with each cell's element
			        for (row = 0; row < rowCnt; row++) {
			            for (col = 0; col < colCnt; col++) {
			                calendar.publiclyTrigger('dayRender', [
			                    {
			                        date: dateEnv.toDate(cells[row][col].date),
			                        el: this.getCellEl(row, col),
			                        view: view
			                    }
			                ]);
			            }
			        }
			        this.isCellSizesDirty = true;
			    };
			    DayGrid.prototype._unrenderCells = function () {
			        this.removeSegPopover();
			    };
			    // Generates the HTML for a single row, which is a div that wraps a table.
			    // `row` is the row number.
			    DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
			        var theme = this.context.theme;
			        var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
			        if (isRigid) {
			            classes.push('fc-rigid');
			        }
			        var bgRow = new DayBgRow(this.context);
			        return '' +
			            '<div class="' + classes.join(' ') + '">' +
			            '<div class="fc-bg">' +
			            '<table class="' + theme.getClass('tableGrid') + '">' +
			            bgRow.renderHtml({
			                cells: this.props.cells[row],
			                dateProfile: this.props.dateProfile,
			                renderIntroHtml: this.renderProps.renderBgIntroHtml
			            }) +
			            '</table>' +
			            '</div>' +
			            '<div class="fc-content-skeleton">' +
			            '<table>' +
			            (this.getIsNumbersVisible() ?
			                '<thead>' +
			                    this.renderNumberTrHtml(row) +
			                    '</thead>' :
			                '') +
			            '</table>' +
			            '</div>' +
			            '</div>';
			    };
			    DayGrid.prototype.getIsNumbersVisible = function () {
			        return this.getIsDayNumbersVisible() ||
			            this.renderProps.cellWeekNumbersVisible ||
			            this.renderProps.colWeekNumbersVisible;
			    };
			    DayGrid.prototype.getIsDayNumbersVisible = function () {
			        return this.rowCnt > 1;
			    };
			    /* Grid Number Rendering
			    ------------------------------------------------------------------------------------------------------------------*/
			    DayGrid.prototype.renderNumberTrHtml = function (row) {
			        var isRtl = this.context.isRtl;
			        var intro = this.renderProps.renderNumberIntroHtml(row, this);
			        return '' +
			            '<tr>' +
			            (isRtl ? '' : intro) +
			            this.renderNumberCellsHtml(row) +
			            (isRtl ? intro : '') +
			            '</tr>';
			    };
			    DayGrid.prototype.renderNumberCellsHtml = function (row) {
			        var htmls = [];
			        var col;
			        var date;
			        for (col = 0; col < this.colCnt; col++) {
			            date = this.props.cells[row][col].date;
			            htmls.push(this.renderNumberCellHtml(date));
			        }
			        if (this.context.isRtl) {
			            htmls.reverse();
			        }
			        return htmls.join('');
			    };
			    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
			    // The number row will only exist if either day numbers or week numbers are turned on.
			    DayGrid.prototype.renderNumberCellHtml = function (date) {
			        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
			        var html = '';
			        var isDateValid = rangeContainsMarker(this.props.dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
			        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
			        var classes;
			        var weekCalcFirstDow;
			        if (!isDayNumberVisible && !this.renderProps.cellWeekNumbersVisible) {
			            // no numbers in day cell (week number must be along the side)
			            return '<td></td>'; //  will create an empty space above events :(
			        }
			        classes = getDayClasses(date, this.props.dateProfile, this.context);
			        classes.unshift('fc-day-top');
			        if (this.renderProps.cellWeekNumbersVisible) {
			            weekCalcFirstDow = dateEnv.weekDow;
			        }
			        html += '<td class="' + classes.join(' ') + '"' +
			            (isDateValid ?
			                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
			                '') +
			            '>';
			        if (this.renderProps.cellWeekNumbersVisible && (date.getUTCDay() === weekCalcFirstDow)) {
			            html += buildGotoAnchorHtml(options, dateEnv, { date: date, type: 'week' }, { 'class': 'fc-week-number' }, dateEnv.format(date, WEEK_NUM_FORMAT) // inner HTML
			            );
			        }
			        if (isDayNumberVisible) {
			            html += buildGotoAnchorHtml(options, dateEnv, date, { 'class': 'fc-day-number' }, dateEnv.format(date, DAY_NUM_FORMAT) // inner HTML
			            );
			        }
			        html += '</td>';
			        return html;
			    };
			    /* Sizing
			    ------------------------------------------------------------------------------------------------------------------*/
			    DayGrid.prototype.updateSize = function (isResize) {
			        var calendar = this.context.calendar;
			        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
			        if (isResize ||
			            this.isCellSizesDirty ||
			            calendar.isEventsUpdated // hack
			        ) {
			            this.buildPositionCaches();
			            this.isCellSizesDirty = false;
			        }
			        fillRenderer.computeSizes(isResize);
			        eventRenderer.computeSizes(isResize);
			        mirrorRenderer.computeSizes(isResize);
			        fillRenderer.assignSizes(isResize);
			        eventRenderer.assignSizes(isResize);
			        mirrorRenderer.assignSizes(isResize);
			    };
			    DayGrid.prototype.buildPositionCaches = function () {
			        this.buildColPositions();
			        this.buildRowPositions();
			    };
			    DayGrid.prototype.buildColPositions = function () {
			        this.colPositions.build();
			    };
			    DayGrid.prototype.buildRowPositions = function () {
			        this.rowPositions.build();
			        this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
			    };
			    /* Hit System
			    ------------------------------------------------------------------------------------------------------------------*/
			    DayGrid.prototype.positionToHit = function (leftPosition, topPosition) {
			        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
			        var col = colPositions.leftToIndex(leftPosition);
			        var row = rowPositions.topToIndex(topPosition);
			        if (row != null && col != null) {
			            return {
			                row: row,
			                col: col,
			                dateSpan: {
			                    range: this.getCellRange(row, col),
			                    allDay: true
			                },
			                dayEl: this.getCellEl(row, col),
			                relativeRect: {
			                    left: colPositions.lefts[col],
			                    right: colPositions.rights[col],
			                    top: rowPositions.tops[row],
			                    bottom: rowPositions.bottoms[row]
			                }
			            };
			        }
			    };
			    /* Cell System
			    ------------------------------------------------------------------------------------------------------------------*/
			    // FYI: the first column is the leftmost column, regardless of date
			    DayGrid.prototype.getCellEl = function (row, col) {
			        return this.cellEls[row * this.colCnt + col];
			    };
			    /* Event Drag Visualization
			    ------------------------------------------------------------------------------------------------------------------*/
			    DayGrid.prototype._renderEventDrag = function (state) {
			        if (state) {
			            this.eventRenderer.hideByHash(state.affectedInstances);
			            this.fillRenderer.renderSegs('highlight', this.context, state.segs);
			        }
			    };
			    DayGrid.prototype._unrenderEventDrag = function (state) {
			        if (state) {
			            this.eventRenderer.showByHash(state.affectedInstances);
			            this.fillRenderer.unrender('highlight', this.context);
			        }
			    };
			    /* Event Resize Visualization
			    ------------------------------------------------------------------------------------------------------------------*/
			    DayGrid.prototype._renderEventResize = function (state) {
			        if (state) {
			            this.eventRenderer.hideByHash(state.affectedInstances);
			            this.fillRenderer.renderSegs('highlight', this.context, state.segs);
			            this.mirrorRenderer.renderSegs(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
			        }
			    };
			    DayGrid.prototype._unrenderEventResize = function (state) {
			        if (state) {
			            this.eventRenderer.showByHash(state.affectedInstances);
			            this.fillRenderer.unrender('highlight', this.context);
			            this.mirrorRenderer.unrender(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
			        }
			    };
			    /* More+ Link Popover
			    ------------------------------------------------------------------------------------------------------------------*/
			    DayGrid.prototype.removeSegPopover = function () {
			        if (this.segPopover) {
			            this.segPopover.hide(); // in handler, will call segPopover's removeElement
			        }
			    };
			    // Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
			    // `levelLimit` can be false (don't limit), a number, or true (should be computed).
			    DayGrid.prototype.limitRows = function (levelLimit) {
			        var rowStructs = this.eventRenderer.rowStructs || [];
			        var row; // row #
			        var rowLevelLimit;
			        for (row = 0; row < rowStructs.length; row++) {
			            this.unlimitRow(row);
			            if (!levelLimit) {
			                rowLevelLimit = false;
			            }
			            else if (typeof levelLimit === 'number') {
			                rowLevelLimit = levelLimit;
			            }
			            else {
			                rowLevelLimit = this.computeRowLevelLimit(row);
			            }
			            if (rowLevelLimit !== false) {
			                this.limitRow(row, rowLevelLimit);
			            }
			        }
			    };
			    // Computes the number of levels a row will accomodate without going outside its bounds.
			    // Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
			    // `row` is the row number.
			    DayGrid.prototype.computeRowLevelLimit = function (row) {
			        var rowEl = this.rowEls[row]; // the containing "fake" row div
			        var rowBottom = rowEl.getBoundingClientRect().bottom; // relative to viewport!
			        var trEls = findChildren(this.eventRenderer.rowStructs[row].tbodyEl);
			        var i;
			        var trEl;
			        // Reveal one level <tr> at a time and stop when we find one out of bounds
			        for (i = 0; i < trEls.length; i++) {
			            trEl = trEls[i];
			            trEl.classList.remove('fc-limited'); // reset to original state (reveal)
			            if (trEl.getBoundingClientRect().bottom > rowBottom) {
			                return i;
			            }
			        }
			        return false; // should not limit at all
			    };
			    // Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
			    // `row` is the row number.
			    // `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
			    DayGrid.prototype.limitRow = function (row, levelLimit) {
			        var _this = this;
			        var colCnt = this.colCnt;
			        var isRtl = this.context.isRtl;
			        var rowStruct = this.eventRenderer.rowStructs[row];
			        var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
			        var col = 0; // col #, left-to-right (not chronologically)
			        var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
			        var cellMatrix; // a matrix (by level, then column) of all <td> elements in the row
			        var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
			        var i;
			        var seg;
			        var segsBelow; // array of segment objects below `seg` in the current `col`
			        var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
			        var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
			        var td;
			        var rowSpan;
			        var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
			        var j;
			        var moreTd;
			        var moreWrap;
			        var moreLink;
			        // Iterates through empty level cells and places "more" links inside if need be
			        var emptyCellsUntil = function (endCol) {
			            while (col < endCol) {
			                segsBelow = _this.getCellSegs(row, col, levelLimit);
			                if (segsBelow.length) {
			                    td = cellMatrix[levelLimit - 1][col];
			                    moreLink = _this.renderMoreLink(row, col, segsBelow);
			                    moreWrap = createElement('div', null, moreLink);
			                    td.appendChild(moreWrap);
			                    moreNodes.push(moreWrap);
			                }
			                col++;
			            }
			        };
			        if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
			            levelSegs = rowStruct.segLevels[levelLimit - 1];
			            cellMatrix = rowStruct.cellMatrix;
			            limitedNodes = findChildren(rowStruct.tbodyEl).slice(levelLimit); // get level <tr> elements past the limit
			            limitedNodes.forEach(function (node) {
			                node.classList.add('fc-limited'); // hide elements and get a simple DOM-nodes array
			            });
			            // iterate though segments in the last allowable level
			            for (i = 0; i < levelSegs.length; i++) {
			                seg = levelSegs[i];
			                var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
			                var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
			                emptyCellsUntil(leftCol); // process empty cells before the segment
			                // determine *all* segments below `seg` that occupy the same columns
			                colSegsBelow = [];
			                totalSegsBelow = 0;
			                while (col <= rightCol) {
			                    segsBelow = this.getCellSegs(row, col, levelLimit);
			                    colSegsBelow.push(segsBelow);
			                    totalSegsBelow += segsBelow.length;
			                    col++;
			                }
			                if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
			                    td = cellMatrix[levelLimit - 1][leftCol]; // the segment's parent cell
			                    rowSpan = td.rowSpan || 1;
			                    segMoreNodes = [];
			                    // make a replacement <td> for each column the segment occupies. will be one for each colspan
			                    for (j = 0; j < colSegsBelow.length; j++) {
			                        moreTd = createElement('td', { className: 'fc-more-cell', rowSpan: rowSpan });
			                        segsBelow = colSegsBelow[j];
			                        moreLink = this.renderMoreLink(row, leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
			                        );
			                        moreWrap = createElement('div', null, moreLink);
			                        moreTd.appendChild(moreWrap);
			                        segMoreNodes.push(moreTd);
			                        moreNodes.push(moreTd);
			                    }
			                    td.classList.add('fc-limited');
			                    insertAfterElement(td, segMoreNodes);
			                    limitedNodes.push(td);
			                }
			            }
			            emptyCellsUntil(this.colCnt); // finish off the level
			            rowStruct.moreEls = moreNodes; // for easy undoing later
			            rowStruct.limitedEls = limitedNodes; // for easy undoing later
			        }
			    };
			    // Reveals all levels and removes all "more"-related elements for a grid's row.
			    // `row` is a row number.
			    DayGrid.prototype.unlimitRow = function (row) {
			        var rowStruct = this.eventRenderer.rowStructs[row];
			        if (rowStruct.moreEls) {
			            rowStruct.moreEls.forEach(removeElement);
			            rowStruct.moreEls = null;
			        }
			        if (rowStruct.limitedEls) {
			            rowStruct.limitedEls.forEach(function (limitedEl) {
			                limitedEl.classList.remove('fc-limited');
			            });
			            rowStruct.limitedEls = null;
			        }
			    };
			    // Renders an <a> element that represents hidden event element for a cell.
			    // Responsible for attaching click handler as well.
			    DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
			        var _this = this;
			        var _a = this.context, calendar = _a.calendar, view = _a.view, dateEnv = _a.dateEnv, options = _a.options, isRtl = _a.isRtl;
			        var a = createElement('a', { className: 'fc-more' });
			        a.innerText = this.getMoreLinkText(hiddenSegs.length);
			        a.addEventListener('click', function (ev) {
			            var clickOption = options.eventLimitClick;
			            var _col = isRtl ? _this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
			            var date = _this.props.cells[row][_col].date;
			            var moreEl = ev.currentTarget;
			            var dayEl = _this.getCellEl(row, col);
			            var allSegs = _this.getCellSegs(row, col);
			            // rescope the segments to be within the cell's date
			            var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
			            var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
			            if (typeof clickOption === 'function') {
			                // the returned value can be an atomic option
			                clickOption = calendar.publiclyTrigger('eventLimitClick', [
			                    {
			                        date: dateEnv.toDate(date),
			                        allDay: true,
			                        dayEl: dayEl,
			                        moreEl: moreEl,
			                        segs: reslicedAllSegs,
			                        hiddenSegs: reslicedHiddenSegs,
			                        jsEvent: ev,
			                        view: view
			                    }
			                ]);
			            }
			            if (clickOption === 'popover') {
			                _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
			            }
			            else if (typeof clickOption === 'string') { // a view name
			                calendar.zoomTo(date, clickOption);
			            }
			        });
			        return a;
			    };
			    // Reveals the popover that displays all events within a cell
			    DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
			        var _this = this;
			        var _a = this.context, calendar = _a.calendar, view = _a.view, theme = _a.theme, isRtl = _a.isRtl;
			        var _col = isRtl ? this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
			        var moreWrap = moreLink.parentNode; // the <div> wrapper around the <a>
			        var topEl; // the element we want to match the top coordinate of
			        var options;
			        if (this.rowCnt === 1) {
			            topEl = view.el; // will cause the popover to cover any sort of header
			        }
			        else {
			            topEl = this.rowEls[row]; // will align with top of row
			        }
			        options = {
			            className: 'fc-more-popover ' + theme.getClass('popover'),
			            parentEl: view.el,
			            top: computeRect(topEl).top,
			            autoHide: true,
			            content: function (el) {
			                _this.segPopoverTile = new DayTile(el);
			                _this.updateSegPopoverTile(_this.props.cells[row][_col].date, segs);
			            },
			            hide: function () {
			                _this.segPopoverTile.destroy();
			                _this.segPopoverTile = null;
			                _this.segPopover.destroy();
			                _this.segPopover = null;
			            }
			        };
			        // Determine horizontal coordinate.
			        // We use the moreWrap instead of the <td> to avoid border confusion.
			        if (isRtl) {
			            options.right = computeRect(moreWrap).right + 1; // +1 to be over cell border
			        }
			        else {
			            options.left = computeRect(moreWrap).left - 1; // -1 to be over cell border
			        }
			        this.segPopover = new Popover(options);
			        this.segPopover.show();
			        calendar.releaseAfterSizingTriggers(); // hack for eventPositioned
			    };
			    // Given the events within an array of segment objects, reslice them to be in a single day
			    DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
			        var dayStart = dayDate;
			        var dayEnd = addDays(dayStart, 1);
			        var dayRange = { start: dayStart, end: dayEnd };
			        var newSegs = [];
			        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
			            var seg = segs_1[_i];
			            var eventRange = seg.eventRange;
			            var origRange = eventRange.range;
			            var slicedRange = intersectRanges(origRange, dayRange);
			            if (slicedRange) {
			                newSegs.push(__assign$1({}, seg, { eventRange: {
			                        def: eventRange.def,
			                        ui: __assign$1({}, eventRange.ui, { durationEditable: false }),
			                        instance: eventRange.instance,
			                        range: slicedRange
			                    }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() }));
			            }
			        }
			        return newSegs;
			    };
			    // Generates the text that should be inside a "more" link, given the number of events it represents
			    DayGrid.prototype.getMoreLinkText = function (num) {
			        var opt = this.context.options.eventLimitText;
			        if (typeof opt === 'function') {
			            return opt(num);
			        }
			        else {
			            return '+' + num + ' ' + opt;
			        }
			    };
			    // Returns segments within a given cell.
			    // If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
			    DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
			        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
			        var level = startLevel || 0;
			        var segs = [];
			        var seg;
			        while (level < segMatrix.length) {
			            seg = segMatrix[level][col];
			            if (seg) {
			                segs.push(seg);
			            }
			            level++;
			        }
			        return segs;
			    };
			    return DayGrid;
			}(DateComponent));

			var WEEK_NUM_FORMAT$1 = createFormatter({ week: 'numeric' });
			/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
			----------------------------------------------------------------------------------------------------------------------*/
			// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
			// It is responsible for managing width/height.
			var AbstractDayGridView = /** @class */ (function (_super) {
			    __extends$1(AbstractDayGridView, _super);
			    function AbstractDayGridView() {
			        var _this = _super !== null && _super.apply(this, arguments) || this;
			        _this.processOptions = memoize(_this._processOptions);
			        _this.renderSkeleton = memoizeRendering(_this._renderSkeleton, _this._unrenderSkeleton);
			        /* Header Rendering
			        ------------------------------------------------------------------------------------------------------------------*/
			        // Generates the HTML that will go before the day-of week header cells
			        _this.renderHeadIntroHtml = function () {
			            var _a = _this.context, theme = _a.theme, options = _a.options;
			            if (_this.colWeekNumbersVisible) {
			                return '' +
			                    '<th class="fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.weekNumberStyleAttr() + '>' +
			                    '<span>' + // needed for matchCellWidths
			                    htmlEscape(options.weekLabel) +
			                    '</span>' +
			                    '</th>';
			            }
			            return '';
			        };
			        /* Day Grid Rendering
			        ------------------------------------------------------------------------------------------------------------------*/
			        // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
			        _this.renderDayGridNumberIntroHtml = function (row, dayGrid) {
			            var _a = _this.context, options = _a.options, dateEnv = _a.dateEnv;
			            var weekStart = dayGrid.props.cells[row][0].date;
			            if (_this.colWeekNumbersVisible) {
			                return '' +
			                    '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '>' +
			                    buildGotoAnchorHtml(// aside from link, important for matchCellWidths
			                    options, dateEnv, { date: weekStart, type: 'week', forceOff: dayGrid.colCnt === 1 }, dateEnv.format(weekStart, WEEK_NUM_FORMAT$1) // inner HTML
			                    ) +
			                    '</td>';
			            }
			            return '';
			        };
			        // Generates the HTML that goes before the day bg cells for each day-row
			        _this.renderDayGridBgIntroHtml = function () {
			            var theme = _this.context.theme;
			            if (_this.colWeekNumbersVisible) {
			                return '<td class="fc-week-number ' + theme.getClass('widgetContent') + '" ' + _this.weekNumberStyleAttr() + '></td>';
			            }
			            return '';
			        };
			        // Generates the HTML that goes before every other type of row generated by DayGrid.
			        // Affects mirror-skeleton and highlight-skeleton rows.
			        _this.renderDayGridIntroHtml = function () {
			            if (_this.colWeekNumbersVisible) {
			                return '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '></td>';
			            }
			            return '';
			        };
			        return _this;
			    }
			    AbstractDayGridView.prototype._processOptions = function (options) {
			        if (options.weekNumbers) {
			            if (options.weekNumbersWithinDays) {
			                this.cellWeekNumbersVisible = true;
			                this.colWeekNumbersVisible = false;
			            }
			            else {
			                this.cellWeekNumbersVisible = false;
			                this.colWeekNumbersVisible = true;
			            }
			        }
			        else {
			            this.colWeekNumbersVisible = false;
			            this.cellWeekNumbersVisible = false;
			        }
			    };
			    AbstractDayGridView.prototype.render = function (props, context) {
			        _super.prototype.render.call(this, props, context);
			        this.processOptions(context.options);
			        this.renderSkeleton(context);
			    };
			    AbstractDayGridView.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        this.renderSkeleton.unrender();
			    };
			    AbstractDayGridView.prototype._renderSkeleton = function (context) {
			        this.el.classList.add('fc-dayGrid-view');
			        this.el.innerHTML = this.renderSkeletonHtml();
			        this.scroller = new ScrollComponent('hidden', // overflow x
			        'auto' // overflow y
			        );
			        var dayGridContainerEl = this.scroller.el;
			        this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl);
			        dayGridContainerEl.classList.add('fc-day-grid-container');
			        var dayGridEl = createElement('div', { className: 'fc-day-grid' });
			        dayGridContainerEl.appendChild(dayGridEl);
			        this.dayGrid = new DayGrid(dayGridEl, {
			            renderNumberIntroHtml: this.renderDayGridNumberIntroHtml,
			            renderBgIntroHtml: this.renderDayGridBgIntroHtml,
			            renderIntroHtml: this.renderDayGridIntroHtml,
			            colWeekNumbersVisible: this.colWeekNumbersVisible,
			            cellWeekNumbersVisible: this.cellWeekNumbersVisible
			        });
			    };
			    AbstractDayGridView.prototype._unrenderSkeleton = function () {
			        this.el.classList.remove('fc-dayGrid-view');
			        this.dayGrid.destroy();
			        this.scroller.destroy();
			    };
			    // Builds the HTML skeleton for the view.
			    // The day-grid component will render inside of a container defined by this HTML.
			    AbstractDayGridView.prototype.renderSkeletonHtml = function () {
			        var _a = this.context, theme = _a.theme, options = _a.options;
			        return '' +
			            '<table class="' + theme.getClass('tableGrid') + '">' +
			            (options.columnHeader ?
			                '<thead class="fc-head">' +
			                    '<tr>' +
			                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
			                    '</tr>' +
			                    '</thead>' :
			                '') +
			            '<tbody class="fc-body">' +
			            '<tr>' +
			            '<td class="' + theme.getClass('widgetContent') + '"></td>' +
			            '</tr>' +
			            '</tbody>' +
			            '</table>';
			    };
			    // Generates an HTML attribute string for setting the width of the week number column, if it is known
			    AbstractDayGridView.prototype.weekNumberStyleAttr = function () {
			        if (this.weekNumberWidth != null) {
			            return 'style="width:' + this.weekNumberWidth + 'px"';
			        }
			        return '';
			    };
			    // Determines whether each row should have a constant height
			    AbstractDayGridView.prototype.hasRigidRows = function () {
			        var eventLimit = this.context.options.eventLimit;
			        return eventLimit && typeof eventLimit !== 'number';
			    };
			    /* Dimensions
			    ------------------------------------------------------------------------------------------------------------------*/
			    AbstractDayGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
			        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
			        this.dayGrid.updateSize(isResize);
			    };
			    // Refreshes the horizontal dimensions of the view
			    AbstractDayGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
			        var dayGrid = this.dayGrid;
			        var eventLimit = this.context.options.eventLimit;
			        var headRowEl = this.header ? this.header.el : null; // HACK
			        var scrollerHeight;
			        var scrollbarWidths;
			        // hack to give the view some height prior to dayGrid's columns being rendered
			        // TODO: separate setting height from scroller VS dayGrid.
			        if (!dayGrid.rowEls) {
			            if (!isAuto) {
			                scrollerHeight = this.computeScrollerHeight(viewHeight);
			                this.scroller.setHeight(scrollerHeight);
			            }
			            return;
			        }
			        if (this.colWeekNumbersVisible) {
			            // Make sure all week number cells running down the side have the same width.
			            this.weekNumberWidth = matchCellWidths(findElements(this.el, '.fc-week-number'));
			        }
			        // reset all heights to be natural
			        this.scroller.clear();
			        if (headRowEl) {
			            uncompensateScroll(headRowEl);
			        }
			        dayGrid.removeSegPopover(); // kill the "more" popover if displayed
			        // is the event limit a constant level number?
			        if (eventLimit && typeof eventLimit === 'number') {
			            dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
			        }
			        // distribute the height to the rows
			        // (viewHeight is a "recommended" value if isAuto)
			        scrollerHeight = this.computeScrollerHeight(viewHeight);
			        this.setGridHeight(scrollerHeight, isAuto);
			        // is the event limit dynamically calculated?
			        if (eventLimit && typeof eventLimit !== 'number') {
			            dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
			        }
			        if (!isAuto) { // should we force dimensions of the scroll container?
			            this.scroller.setHeight(scrollerHeight);
			            scrollbarWidths = this.scroller.getScrollbarWidths();
			            if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
			                if (headRowEl) {
			                    compensateScroll(headRowEl, scrollbarWidths);
			                }
			                // doing the scrollbar compensation might have created text overflow which created more height. redo
			                scrollerHeight = this.computeScrollerHeight(viewHeight);
			                this.scroller.setHeight(scrollerHeight);
			            }
			            // guarantees the same scrollbar widths
			            this.scroller.lockOverflow(scrollbarWidths);
			        }
			    };
			    // given a desired total height of the view, returns what the height of the scroller should be
			    AbstractDayGridView.prototype.computeScrollerHeight = function (viewHeight) {
			        return viewHeight -
			            subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
			    };
			    // Sets the height of just the DayGrid component in this view
			    AbstractDayGridView.prototype.setGridHeight = function (height, isAuto) {
			        if (this.context.options.monthMode) {
			            // if auto, make the height of each row the height that it would be if there were 6 weeks
			            if (isAuto) {
			                height *= this.dayGrid.rowCnt / 6;
			            }
			            distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
			        }
			        else {
			            if (isAuto) {
			                undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
			            }
			            else {
			                distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
			            }
			        }
			    };
			    /* Scroll
			    ------------------------------------------------------------------------------------------------------------------*/
			    AbstractDayGridView.prototype.computeDateScroll = function (duration) {
			        return { top: 0 };
			    };
			    AbstractDayGridView.prototype.queryDateScroll = function () {
			        return { top: this.scroller.getScrollTop() };
			    };
			    AbstractDayGridView.prototype.applyDateScroll = function (scroll) {
			        if (scroll.top !== undefined) {
			            this.scroller.setScrollTop(scroll.top);
			        }
			    };
			    return AbstractDayGridView;
			}(View));
			AbstractDayGridView.prototype.dateProfileGeneratorClass = DayGridDateProfileGenerator;

			var SimpleDayGrid = /** @class */ (function (_super) {
			    __extends$1(SimpleDayGrid, _super);
			    function SimpleDayGrid(dayGrid) {
			        var _this = _super.call(this, dayGrid.el) || this;
			        _this.slicer = new DayGridSlicer();
			        _this.dayGrid = dayGrid;
			        return _this;
			    }
			    SimpleDayGrid.prototype.firstContext = function (context) {
			        context.calendar.registerInteractiveComponent(this, { el: this.dayGrid.el });
			    };
			    SimpleDayGrid.prototype.destroy = function () {
			        _super.prototype.destroy.call(this);
			        this.context.calendar.unregisterInteractiveComponent(this);
			    };
			    SimpleDayGrid.prototype.render = function (props, context) {
			        var dayGrid = this.dayGrid;
			        var dateProfile = props.dateProfile, dayTable = props.dayTable;
			        dayGrid.receiveProps(__assign$1({}, this.slicer.sliceProps(props, dateProfile, props.nextDayThreshold, context.calendar, dayGrid, dayTable), { dateProfile: dateProfile, cells: dayTable.cells, isRigid: props.isRigid }), context);
			    };
			    SimpleDayGrid.prototype.buildPositionCaches = function () {
			        this.dayGrid.buildPositionCaches();
			    };
			    SimpleDayGrid.prototype.queryHit = function (positionLeft, positionTop) {
			        var rawHit = this.dayGrid.positionToHit(positionLeft, positionTop);
			        if (rawHit) {
			            return {
			                component: this.dayGrid,
			                dateSpan: rawHit.dateSpan,
			                dayEl: rawHit.dayEl,
			                rect: {
			                    left: rawHit.relativeRect.left,
			                    right: rawHit.relativeRect.right,
			                    top: rawHit.relativeRect.top,
			                    bottom: rawHit.relativeRect.bottom
			                },
			                layer: 0
			            };
			        }
			    };
			    return SimpleDayGrid;
			}(DateComponent));
			var DayGridSlicer = /** @class */ (function (_super) {
			    __extends$1(DayGridSlicer, _super);
			    function DayGridSlicer() {
			        return _super !== null && _super.apply(this, arguments) || this;
			    }
			    DayGridSlicer.prototype.sliceRange = function (dateRange, dayTable) {
			        return dayTable.sliceRange(dateRange);
			    };
			    return DayGridSlicer;
			}(Slicer));

			var DayGridView = /** @class */ (function (_super) {
			    __extends$1(DayGridView, _super);
			    function DayGridView() {
			        var _this = _super !== null && _super.apply(this, arguments) || this;
			        _this.buildDayTable = memoize(buildDayTable);
			        return _this;
			    }
			    DayGridView.prototype.render = function (props, context) {
			        _super.prototype.render.call(this, props, context); // will call _renderSkeleton/_unrenderSkeleton
			        var dateProfile = this.props.dateProfile;
			        var dayTable = this.dayTable =
			            this.buildDayTable(dateProfile, props.dateProfileGenerator);
			        if (this.header) {
			            this.header.receiveProps({
			                dateProfile: dateProfile,
			                dates: dayTable.headerDates,
			                datesRepDistinctDays: dayTable.rowCnt === 1,
			                renderIntroHtml: this.renderHeadIntroHtml
			            }, context);
			        }
			        this.simpleDayGrid.receiveProps({
			            dateProfile: dateProfile,
			            dayTable: dayTable,
			            businessHours: props.businessHours,
			            dateSelection: props.dateSelection,
			            eventStore: props.eventStore,
			            eventUiBases: props.eventUiBases,
			            eventSelection: props.eventSelection,
			            eventDrag: props.eventDrag,
			            eventResize: props.eventResize,
			            isRigid: this.hasRigidRows(),
			            nextDayThreshold: this.context.nextDayThreshold
			        }, context);
			    };
			    DayGridView.prototype._renderSkeleton = function (context) {
			        _super.prototype._renderSkeleton.call(this, context);
			        if (context.options.columnHeader) {
			            this.header = new DayHeader(this.el.querySelector('.fc-head-container'));
			        }
			        this.simpleDayGrid = new SimpleDayGrid(this.dayGrid);
			    };
			    DayGridView.prototype._unrenderSkeleton = function () {
			        _super.prototype._unrenderSkeleton.call(this);
			        if (this.header) {
			            this.header.destroy();
			        }
			        this.simpleDayGrid.destroy();
			    };
			    return DayGridView;
			}(AbstractDayGridView));
			function buildDayTable(dateProfile, dateProfileGenerator) {
			    var daySeries = new DaySeries(dateProfile.renderRange, dateProfileGenerator);
			    return new DayTable(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
			}

			var main = createPlugin({
			    defaultView: 'dayGridMonth',
			    views: {
			        dayGrid: DayGridView,
			        dayGridDay: {
			            type: 'dayGrid',
			            duration: { days: 1 }
			        },
			        dayGridWeek: {
			            type: 'dayGrid',
			            duration: { weeks: 1 }
			        },
			        dayGridMonth: {
			            type: 'dayGrid',
			            duration: { months: 1 },
			            monthMode: true,
			            fixedWeekCount: true
			        }
			    }
			});

			const getTitle = ({ teachingWeek, name, weekCount, lecture }) => {
			  if (teachingWeek.isHolidayWeek) {
			    return "HOLIDAY";
			  }

			  if (teachingWeek.isBreakWeek) {
			    return "STUDY BREAK";
			  }

			  return `${name} - W${weekCount}${lecture}`;
			};

			class CohortCalendarController {
			  constructor(simulation) {
			    this.simulation = simulation;
			    this.calendar = null;
			    this.render();
			  }

			  render() {
			    $("#cohort-calendar").empty();
			    const calendarEl = document.getElementById("cohort-calendar");
			    let events = [];
			    this.simulation.cohorts.forEach((cohort) => {
			      let weekCount = 0;
			      const name = cohort.name;
			      const colour = cohort.colour;
			      const weeks = cohort.teachingWeeks.forEach((teachingWeek, index) => {
			        if (!teachingWeek.isHolidayWeek && !teachingWeek.isBreakWeek) {
			          weekCount++;
			        }
			        events.push({
			          title: getTitle({ teachingWeek, name, weekCount, lecture: "L1" }),
			          start: moment(teachingWeek.firstTeachingDay)
			            .hour(18)
			            .minutes(30)
			            .toDate(),
			          end: moment(teachingWeek.firstTeachingDay)
			            .hour(21)
			            .minutes(30)
			            .toDate(),
			          groupId: cohort.name,
			          backgroundColor: cohort.colour,
			          extendedProps: {
			            teachingTeam: teachingWeek.teachingTeam.name,
			          },
			        });
			        events.push({
			          title: getTitle({ teachingWeek, name, weekCount, lecture: "L2" }),
			          start: moment(teachingWeek.secondTeachingDay)
			            .hour(18)
			            .minutes(30)
			            .toDate(),
			          end: moment(teachingWeek.secondTeachingDay)
			            .hour(21)
			            .minutes(30)
			            .toDate(),
			          groupId: cohort.name,
			          backgroundColor: cohort.colour,
			          extendedProps: {
			            teachingTeam: teachingWeek.teachingTeam.name,
			          },
			        });
			      });
			    });
			    this.calendar = new Calendar(calendarEl, {
			      events,
			      plugins: [main],
			      contentHeight: 500,
			      eventRender: function (info) {
			        $(info.el)
			          .popover({
			            title: info.event.title,
			            placement: "top",
			            trigger: "hover",
			            content: `Taught by ${info.event.extendedProps.teachingTeam}`,
			            container: "body",
			          })
			          .popover("show");
			      },
			    });
			    this.calendar.render();
			  }
			}

			class TeamCalendarController {
			  constructor(simulation) {
			    this.simulation = simulation;
			    this.calendar = null;
			    this.render();
			  }

			  render() {
			    $("#team-calendar").empty();
			    const calendarEl = document.getElementById("team-calendar");
			    let events = [];
			    this.simulation.teachingTeams.forEach((team) => {
			      const name = team.name;
			      const colour = team.colour;
			      for (let i = 0; i < team.teachingPeriods.length; i++) {
			        const cohortName = team.teachingPeriods[i].cohort.name;
			          const currentTeachingPeriodStartDate = team.teachingPeriods[i].from;
			          const currentTeachingPeriodEndDate = team.teachingPeriods[i].to;
			          events.push({
			            title: `${name} - ${cohortName}`,
			            start: moment(currentTeachingPeriodStartDate)
			              .hour(18)
			              .minutes(30)
			              .toDate(),
			            end: moment(currentTeachingPeriodEndDate)
			              .hour(21)
			              .minutes(30)
			              .toDate(),
			            groupId: name,
			            backgroundColor: colour,
			            extendedProps: {
			              cohortName: cohortName,
			            },
			          });

			      }
			    });
			    this.calendar = new Calendar(calendarEl, {
			      events,
			      plugins: [main],
			      contentHeight: 500,
			      eventRender: function (info) {
			        $(info.el)
			          .popover({
			            title: info.event.title,
			            placement: "top",
			            trigger: "hover",
			            content: `Teaching ${info.event.extendedProps.cohortName}`,
			            container: "body",
			          })
			          .popover("show");
			      },
			    });
			    this.calendar.render();
			  }
			}

			const eazyBind = (inputId, labelId) => {
			  const input = $(inputId);
			  const label = $(labelId);
			  const updateLabelWhenInputChanges = () => {
			    const value = input.val();
			    label.html(value);
			  };
			  updateLabelWhenInputChanges(); // sync on load
			  input.change(updateLabelWhenInputChanges);
			  return input;
			};

			let coreWeeksCount;
			let backendWeeksCount;
			let frontendWeeksCount;
			let cohortStartFrequency;
			let simulationStartDate;
			let coreTeamCount;
			let backendTeamCount;
			let frontendTeamCount;
			let simulationYears;
			let breakWeek1;
			let breakWeek2;

			window.onload = function () {
			  coreWeeksCount = eazyBind("#core-weeks-input", "#core-weeks-label");
			  backendWeeksCount = eazyBind("#backend-weeks-input", "#backend-weeks-label");
			  frontendWeeksCount = eazyBind(
			    "#frontend-weeks-input",
			    "#frontend-weeks-label"
			  );
			  cohortStartFrequency = eazyBind(
			    "#cohort-start-frequency-input",
			    "#cohort-start-frequency-label"
			  );
			  simulationStartDate = eazyBind("#simulation-start-date-input", "#nope");
			  coreTeamCount = eazyBind("#core-team-count-input", "#core-team-count-label");
			  backendTeamCount = eazyBind(
			    "#backend-team-count-input",
			    "#backend-team-count-label"
			  );
			  frontendTeamCount = eazyBind(
			    "#frontend-team-count-input",
			    "#frontend-team-count-label"
			  );
			  simulationYears = eazyBind("#years-input", "#years-label");
			  simulationStartDate.val(moment().format('YYYY-MM-DD'));
			  breakWeek1 = $("#break-week-1");
			  breakWeek2 = $("#break-week-2");
			};

			const computeButton = $("#compute-btn");
			computeButton.click(() => {
			    let simulation = new Simulation({
			        cohortStartFrequency: Number(cohortStartFrequency.val()),
			        simulationStartDate: simulationStartDate.val(),
			        coreTeamCount: Number(coreTeamCount.val()),
			        backendTeamCount: Number(backendTeamCount.val()),
			        frontendTeamCount: Number(frontendTeamCount.val()),
			        classStructure: [{
			            name: SECTION.CORE,
			            weeks: Number(coreWeeksCount.val()),
			        },{
			            name: SECTION.BACKEND,
			            weeks: Number(backendWeeksCount.val()),
			        },{
			            name: SECTION.FRONTEND,
			            weeks: Number(frontendWeeksCount.val())
			        }],
			        simulationYears: Number(simulationYears.val()),
			        breakWeek1: breakWeek1.is(":checked"),
			        breakWeek2: breakWeek2.is(":checked"),
			        dayOfWeek: $("#start-day-of-week").val()
			    });
			    let summary = new SummaryController(simulation);
			    let cohortCalendar = new CohortCalendarController(simulation);
			    let teamCalendar = new TeamCalendarController(simulation);
			    const firstCohortSummary = simulation.cohorts[0].toString();
			    $("#cohortsummarytable").html(`<pre>${firstCohortSummary}</pre>`);
			});

		}
	};
});
