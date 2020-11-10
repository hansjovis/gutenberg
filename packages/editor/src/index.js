/**
 * WordPress dependencies
 */
import '@wordpress/block-editor';
import '@wordpress/blocks';
import '@wordpress/core-data';
import '@wordpress/keyboard-shortcuts';
import '@wordpress/notices';
import '@wordpress/reusable-blocks';
import '@wordpress/rich-text';

/**
 * Internal dependencies
 */
import './hooks';

export { default as editorStore } from './store';
export * from './components';
export * from './utils';
export { storeConfig } from './store';

/*
 * Backward compatibility
 */
export { transformStyles } from '@wordpress/block-editor';
