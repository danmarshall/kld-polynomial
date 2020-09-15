/**
 *  SqrtPolynomial.js
 *
 *  @module SqrtPolynomial
 *  @copyright 2002-2019 Kevin Lindsey
 */

import Polynomial from "./Polynomial.js";

/**
 *  SqrtPolynomial
 *
 *  @deprecated
 *  @memberof module:kld-polynomial
 */
class SqrtPolynomial extends Polynomial {
    /**
     *  eval
     *
     *  @param {number} x
     *  @returns {number}
     */
    eval(x) {
        const TOLERANCE = 1e-7;

        let result = super.eval(x);

        // NOTE: May need to change the following.  I added these to capture
        // some really small negative values that were being generated by one
        // of my Bezier arcLength functions
        if (Math.abs(result) < TOLERANCE) {
            result = 0;
        }

        if (result < 0) {
            throw new RangeError("Cannot take square root of negative number");
        }

        return Math.sqrt(result);
    }

    /**
     *  toString
     *
     *  @returns {string}
     */
    toString() {
        const result = super.toString();

        return "sqrt(" + result + ")";
    }
}

export default SqrtPolynomial;