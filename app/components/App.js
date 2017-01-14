import React from 'react';
import { default as Sidebar } from 'react-sidebar';
import SidebarContent from './SidebarContent';
import NavigationBar from './NavigationBar';

class App extends React.Component {
    constructor() {
        super();

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);

        this.state = {
            sidebarOpen: false,
            sidebarDocked: false,
        };

        this.mql = window.matchMedia('(min-width: 991px)');
    }

    componentWillMount() {
        this.mql.addListener(this.mediaQueryChanged);
        this.setState({ sidebarDocked: this.mql.matches });
    }

    componentWillUnmount() {
        this.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    toggleOpen(ev) {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });

        if (ev) {
            ev.preventDefault();
        }
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: this.mql.matches });
    }

    render() {
        return (
            <Sidebar
                className="sidebar"
                sidebar={<SidebarContent />}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
            >
                <div className="app">
                    {!this.state.sidebarDocked &&
                        <NavigationBar onMenuButtonClick={this.toggleOpen} />
                    }
                    {this.props.children}
                </div>
            </Sidebar>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element,
};

export default App;
