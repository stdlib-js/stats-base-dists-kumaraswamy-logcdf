/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the natural logarithm of the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution.
*
* @module @stdlib/stats-base-dists-kumaraswamy-logcdf
*
* @example
* var logcdf = require( '@stdlib/stats-base-dists-kumaraswamy-logcdf' );
*
* var y = logcdf( 0.5, 1.0, 1.0 );
* // returns ~-0.693
*
* y = logcdf( 0.5, 2.0, 4.0 );
* // returns ~-0.38
*
* @example
* var factory = require( '@stdlib/stats-base-dists-kumaraswamy-logcdf' ).factory;
*
* var logcdf = factory( 0.5, 0.5 );
*
* var y = logcdf( 0.8 );
* // returns ~-0.393
*
* y = logcdf( 0.3 );
* // returns ~-1.118
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
