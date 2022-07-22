# odin-signup-form

This is an exercise for [The Odin Project](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form). The focus of the exercise was form styling with CSS.

I did not implement the submit logic or the client-side validation (apart from using e-mail input field for e-mail). I check for matching passwords, but only semantically: the two password inputs will be outlined red if they do not match, green if they match, and not outlined if they are both empty. The check for this happens when one of the password input fields lose focus. Pressing the submit button will not check for password equality, however.
