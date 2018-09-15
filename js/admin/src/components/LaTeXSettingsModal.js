import SettingsModal from 'flarum/components/SettingsModal';
import Alert from 'flarum/components/Alert';
import Switch from 'flarum/components/Switch';

export default class LaTeXSettingsModal extends SettingsModal {
    className() {
        return 'LaTeXSettingsModal Modal--medium';
    }
    title() {
        return 'ReFlar LaTeX';
    }
    form() {
        return [
            <div className="Form-group">
                <p>{app.translator.trans('reflar-latex.admin.settings.prevent_formatting_description')}</p>
                <fieldset>
                    {Alert.component({
                        children: app.translator.trans('reflar-latex.admin.settings.prevent_formatting_warning'),
                        dismissible: false,
                    })}

                    <br/>

                    {Switch.component({
                        state: this.setting('reflar-latex.prevent_formatting')(),
                        children: app.translator.trans('reflar-latex.admin.settings.prevent_formatting_label'),
                        onchange: this.setting('reflar-latex.prevent_formatting'),
                    })}
                </fieldset>
            </div>
        ];
    }
}