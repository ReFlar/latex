import LaTeXSettingsModal from "./components/LaTeXSettingsModal";

app.initializers.add('reflar-latex', () => {
    app.extensionSettings['reflar-latex'] = () => app.modal.show(new LaTeXSettingsModal());
});
