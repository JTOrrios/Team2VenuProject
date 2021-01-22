import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
                <div class="contact_form">
                    <h2>Apply Here!</h2>
                    <form action="action_page.php">

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label for="subject">Tell us about yourself</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit"/>
                    </form>
                </div>
        );
    }
}
