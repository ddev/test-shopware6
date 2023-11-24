(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[284],{"8IF2":function(t,r,s){},msya:function(t,r,s){"use strict";s.r(r);s("qd8H"),r.default={template:'\n{% block sw_import_export_progress %}\n<div class="sw-import-export-progress">\n    <div class="sw-import-export-progress__progress">\n        \n        {% block sw_import_export_progress_start_process %}\n        <sw-button\n            :disabled="disableButton"\n            class="sw-import-export-progress__start-process-action"\n            size="small"\n            variant="primary"\n            @click="$emit(\'process-start\')"\n        >\n            <template v-if="activityType === \'import\'">\n                {{ $tc(\'sw-import-export.progress.startImportLabel\') }}\n            </template>\n            <template v-else>\n                {{ $tc(\'sw-import-export.progress.startExportLabel\') }}\n            </template>\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_import_export_progress_start_process_dryrun %}\n        <sw-button\n            v-if="activityType === \'import\'"\n            :disabled="disableButton"\n            class="sw-import-export-progress__start-process-dryrun-action"\n            size="small"\n            @click="$emit(\'process-start-dryrun\')"\n        >\n            {{ $tc(\'sw-import-export.progress.startImportDryrunLabel\') }}\n        </sw-button>\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',inject:["feature"],props:{activityType:{type:String,required:!1,default:"import",validValues:["import","export"],validator:function(t){return["import","export"].includes(t)}},disableButton:{type:Boolean,required:!1,default:!0}}}},qd8H:function(t,r,s){var e=s("8IF2");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s("P8hj").default)("8739536c",e,!0,{})}}]);
//# sourceMappingURL=b5ab3739e12b8fbae0a1.js.map