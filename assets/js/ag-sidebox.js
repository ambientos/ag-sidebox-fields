import ControlCreate from './modules/control'

const { __ } = wp.i18n
const { registerPlugin } = wp.plugins
const { PluginDocumentSettingPanel } = wp.editPost
const { TextControl, TextareaControl } = wp.components
const { withSelect, withDispatch } = wp.data


/**
 * Title
 */

let TitleController = ControlCreate({
	component: TextControl,
	name: 'title_meta'
})


/**
 * Description
 */

let Description = ControlCreate({
	component: TextareaControl,
	name: 'descr_meta'
})


/**
 * Intro
 */

let Intro = ControlCreate({
	component: TextareaControl,
	name: 'intro_meta'
})


/**
 * Source
 */

let Source = ControlCreate({
	component: TextControl,
	name: 'source_meta'
})


/**
 * Register Plugin
 */

registerPlugin('ag-title-panel', {
	render: () => {
		return (
			<div>
				<PluginDocumentSettingPanel
					name='ag-title-desc-panel'
					title={ __( 'SEO Fields', 'agsf' ) }
				>
					<label>{ __( 'Title', 'agsf' ) }</label>
					<TitleController/>

					<label>{ __( 'Description', 'agsf' ) }</label>
					<Description/>
				</PluginDocumentSettingPanel>

				<PluginDocumentSettingPanel
					name='ag-intro-panel'
					title={ __( 'Introduction', 'agsf' ) }
				>
					<Intro/>
				</PluginDocumentSettingPanel>

				<PluginDocumentSettingPanel
					name='ag-source-panel'
					title={ __( 'Source', 'agsf' ) }
				>
					<Source/>
				</PluginDocumentSettingPanel>
			</div>
		)
	},
	icon: '',
})