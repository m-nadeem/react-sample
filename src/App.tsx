
import './App.css';
import * as React from 'react'
import ClinicList from './Components/ClinicList/ClinicList';
import { IProps } from './Interfaces/IProps';
import { IState } from './Interfaces/IState';
import { DataService } from './Services/DataService';


class App extends React.Component<IProps, IState> {

  public state: IState;
  private dataService: DataService;

  constructor(props: IProps) {
    super(props);
    this.state = {
      clinics: []
    };
    this.dataService = new DataService();
  }
    
  componentDidMount() {
      this.dataService.getData().then(res => res.json && res.json()).then(data => this.setState({clinics: data}));
  }
  render() {
    return (
      <ClinicList clinics={this.state.clinics} />
    );
  }
}

export default App;
