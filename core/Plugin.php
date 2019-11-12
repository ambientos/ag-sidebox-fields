<?php

namespace AG_Sidebox_Fields;

class Plugin {
	/**
	 * Post Meta fields
	 */
	public $meta_fields = array(
		'_title_meta',
		'_descr_meta',
		'_source_meta',
		'_intro_meta',
	);

	/**
	 * Init
	 *
	 * @return
	 */
	public function __construct() {

		/**
		 * Actions
		 */
		add_action( 'plugins_loaded', array( __CLASS__, 'plugins_loaded' ) );

		/**
		 * Register Post Meta
		 */
		add_action( 'init', array( $this, 'register_meta' ) );

		/**
		 * Load assets
		 */
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );
	}

	/**
	 * Main load
	 *
	 * @return
	 */
	public static function plugins_loaded() {

		/**
		 * Load translations for this plugin
		 */
		load_textdomain( TEXT_DOMAIN, PLUGIN_FOLDER . '/languages/' . TEXT_DOMAIN . '-' . get_locale() . '.mo' );
	}

	/**
	 * Register Post Meta
	 */
	public function register_meta() {
		foreach ( $this->meta_fields as $meta_field ) {
			register_post_meta('post', $meta_field, array(
				'show_in_rest'      => true,
				'type'              => 'string',
				'single'            => true,
				'sanitize_callback' => 'sanitize_text_field',
				'auth_callback'     => function() {
					return current_user_can('edit_posts');
				}
			));
		}
	}

	/**
	 * Add assets to Gutenberg
	 */
	public function enqueue_block_editor_assets() {
		global $post_type;

		/**
		 * Show only in Posts
		 */
		if ( 'post' !== $post_type ) {
			return;
		}

		wp_enqueue_script(
			'ag-sidebox',
			PLUGIN_URI . '/assets/js/ag-sidebox.build.js',
			array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
		);
	}
}