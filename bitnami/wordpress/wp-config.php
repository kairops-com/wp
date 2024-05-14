<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bitnami_wordpress' );

/** Database username */
define( 'DB_USER', 'bn_wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'O0$^rFtLj7hwCMKg' );

/** Database hostname */
define( 'DB_HOST', 'mariadb:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'j(,yz1}]JnaSuZNfE1HW0SA&}QXWHz$,pD+ho:1SN@>c2Q$YVbq;9Ah<n(u_wTy4' );
define( 'SECURE_AUTH_KEY',  'tzhH?hIY[.}@Z#JQS1+oO0Pj;!MB%A 0mq1wWywtbQXmPb3!S-^<V#lM9P>oq;j}' );
define( 'LOGGED_IN_KEY',    'W 40BAg`CVLM!]?h:X[Nd.MXODgR:65EQTmfwu*}j7X2OyKF/*YkjIX#V~W.QCk_' );
define( 'NONCE_KEY',        'oX*+1LnH,CUfFtw@J=b)4Ute1Ksg+=s8ndR5l9oZ6TddkLFgvM#]+7D38TaB&_n[' );
define( 'AUTH_SALT',        'Y#gwAUs^vPoaR1;[r*8f/A_ag]mt+N;xYw137`T{}#,w`>v2%^GdP^)L](WAzX/x' );
define( 'SECURE_AUTH_SALT', '4G2zWlE!?dk>9~s,YS,.o8$Pb^S2pt2PY6jwJO0T(IrY{6xX<W4L^:(_X`T@sD{^' );
define( 'LOGGED_IN_SALT',   'x-*+}FsNwYqe 5jYLP+4hN5!&_Y<y_;gLH&LA!uJP.AA)XsB-7 q-+Q,A~f=mX*)' );
define( 'NONCE_SALT',       'v`:@s1p}nu-G1dq<G~gvD21`?Y(FXT-N M63|sOLb;h{Zk07q8o36.IH-KN%eC1u' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
