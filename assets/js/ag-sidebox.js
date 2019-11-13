const { __ } = wp.i18n
const { registerPlugin } = wp.plugins
const { PluginDocumentSettingPanel } = wp.editPost
const { TextControl, TextareaControl } = wp.components
const { withSelect, withDispatch } = wp.data

/**
 * Title
 */

let TitleController = props => (
    <TextControl
        value={props.title_meta}
        onChange={(value) => props.onMetaFieldChange(value)}
    />
)

TitleController = withSelect(
    (select) => {
        return {
            title_meta: select('core/editor').getEditedPostAttribute('meta')['_title_meta']
        }
    }
)(TitleController)

TitleController = withDispatch(
    (dispatch) => {
        return {
            onMetaFieldChange: (value) => {
                dispatch('core/editor').editPost({ meta: { _title_meta: value } })
            }
        }
    }
)(TitleController)


/**
 * Description
 */

let Description = props => (
    <TextareaControl
        value={props.descr_meta}
        onChange={(value) => props.onMetaFieldChange(value)}
    />
)

Description = withSelect(
    (select) => {
        return {
            descr_meta: select('core/editor').getEditedPostAttribute('meta')['_descr_meta']
        }
    }
)(Description)

Description = withDispatch(
    (dispatch) => {
        return {
            onMetaFieldChange: (value) => {
                dispatch('core/editor').editPost({ meta: { _descr_meta: value } })
            }
        }
    }
)(Description)


/**
 * Source
 */

let Source = props => (
    <TextControl
        value={props.source_meta}
        onChange={(value) => props.onMetaFieldChange(value)}
    />
)

Source = withSelect(
    (select) => {
        return {
            source_meta: select('core/editor').getEditedPostAttribute('meta')['_source_meta']
        }
    }
)(Source)

Source = withDispatch(
    (dispatch) => {
        return {
            onMetaFieldChange: (value) => {
                dispatch('core/editor').editPost({ meta: { _source_meta: value } })
            }
        }
    }
)(Source)


/**
 * Source
 */

let Intro = props => (
    <TextareaControl
        value={props.intro_meta}
        onChange={(value) => props.onMetaFieldChange(value)}
    />
)

Intro = withSelect(
    (select) => {
        return {
            intro_meta: select('core/editor').getEditedPostAttribute('meta')['_intro_meta']
        }
    }
)(Intro)

Intro = withDispatch(
    (dispatch) => {
        return {
            onMetaFieldChange: (value) => {
                dispatch('core/editor').editPost({ meta: { _intro_meta: value } })
            }
        }
    }
)(Intro)


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