import toaster from 'toasted-notes'
import "toasted-notes/src/styles.css";

export const notify = (text) => {
    toaster.notify(text, {
        position: 'bottom-right',
        duration: 5000
      })
}