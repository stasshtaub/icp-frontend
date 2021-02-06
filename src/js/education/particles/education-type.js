import { init } from "../../components/inline-slider";

const slider = document.querySelector(".education-type__inline-slider");

if (slider) {
    const listeners = {
        init: function () {
            setTimeout(() => {
                this.update();
            }, 500 );
        },
    };
    init(slider, listeners);
}
