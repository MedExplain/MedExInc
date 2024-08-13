import React from "react";
import "./index.scss";

const ComingSoonContact = () => {
    return (
        <div className="containercontact" style={{ display: 'flex', justifyContent: 'center',  }}>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ margin: "0", fontWeight: "bold", marginBottom: '0.5rem' }}>Contact</h2>
                <p style={{ margin: '0' }}>For more information, contact Ariel Barasch, Director of Operations, at <a href="mailto:abarasch@medexplain.org?subject=MedExplain Inquiry">abarasch@medexplain.org</a>.</p>
            </div>
        </div>
    );
};

export default ComingSoonContact;
