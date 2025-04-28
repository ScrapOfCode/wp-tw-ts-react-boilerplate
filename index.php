<?php
/**
 * Plugin Name: Scrappy Plugin
 * Description: A plugin that adds cool React-based components
 * Version: 1.0
 * Author: Scrapofcode
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Register blocks
function scrappy_register_blocks() {
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    $blocks = ["section", "title", "text", "navigation_container", "navigation_item", "navigation_items_wrapper"];

    foreach ( $blocks as $block ) {
        register_block_type( __DIR__ . "/build/blocks/$block" );
    }
}
add_action( 'init', 'scrappy_register_blocks' );

// Register global styles
function scrappy_register_global_styles() {
    wp_register_style(
        'scrappy-global-style',
        plugin_dir_url(__FILE__) . 'build/global-styles.css',
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'build/global-styles.css')
    );
}
add_action('init', 'scrappy_register_global_styles');

// Enqueue editor styles
function scrappy_enqueue_block_editor_styles() {
    $style_path = plugin_dir_path(__FILE__) . 'build/global-styles.css';
    $style_url = plugin_dir_url(__FILE__) . 'build/global-styles.css';
    $style_handle = 'scrappy-global-styles-editor';

    if ( ! file_exists( $style_path ) ) {
        return;
    }

    $style_version = filemtime($style_path);

    wp_enqueue_style(
        $style_handle,
        $style_url,
        array('wp-edit-blocks'),
        $style_version
    );
}
add_action( 'enqueue_block_editor_assets', 'scrappy_enqueue_block_editor_styles' );

// Enqueue frontend styles
function scrappy_enqueue_frontend_styles() {
    $style_path = plugin_dir_path(__FILE__) . 'build/global-styles.css';
    $style_url = plugin_dir_url(__FILE__) . 'build/global-styles.css';
    $style_handle = 'scrappy-global-styles';

    if ( ! file_exists( $style_path ) ) {
        return;
    }

    $style_version = filemtime($style_path);

    wp_enqueue_style(
        $style_handle,
        $style_url,
        array('wp-block-library-theme', 'theme-main-style-handle'),
        $style_version
    );
}
add_action( 'wp_enqueue_scripts', 'scrappy_enqueue_frontend_styles', 20 );
