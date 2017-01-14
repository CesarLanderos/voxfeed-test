import React from 'react';

function NavigationBar(props) {
    return (
        <div className="navigation-bar">
            <button onClick={props.onMenuButtonClick}>
                <img src="img/icon_burguer.png" alt="Menú" />
            </button>
        </div>
    );
}

NavigationBar.propTypes = {
    onMenuButtonClick: React.PropTypes.func,
};

export default NavigationBar;
