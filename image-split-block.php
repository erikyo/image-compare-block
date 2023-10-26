<?php
/**
 * Plugin Name: Image compare Block
 * Plugin URI: https://github.com/erikyo/typescript-wp-block
 * Description: A block that compare two images
 * Version: 0.0.1
 * Author: codekraft
 */

add_action( 'init', function() {
	register_block_type( __DIR__ );
} );
