import { Component, OnInit, NgZone } from '@angular/core';
import { ShowIncidentsService } from '../show-incidents.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { incident, incidentViewModel, location } from '../../shared/incident.interface';
const SMALL_WIDTH_BREAKPOINT = 600;

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  displayedColumns = ['icon', 'datetime', 'id', 'locationName', 'name', 'description'];
  dataSource: MatTableDataSource<incidentViewModel>;
  incidentViewModel: incidentViewModel[];
  locationsArray: location[];

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  constructor(zone: NgZone, private userService: ShowIncidentsService) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.userService.getLocations().subscribe(
      (locations) => {
        this.locationsArray = JSON.parse(locations);

        this.userService.getIncidents().subscribe(
          (data) => {
            this.incidentViewModel = this.ConvertToViewModel(JSON.parse(data));

            this.dataSource = new MatTableDataSource<incidentViewModel>(this.incidentViewModel);
          });
      });

  }

  ConvertToViewModel(incidentArray: incident[]): incidentViewModel[] {
    let result: incidentViewModel[] = [];
    for (let index = 0; index < incidentArray.length; index++) {
      const element = incidentArray[index];
      let vm = new incidentViewModel();
      vm.name = element.name;
      vm.id = element.id;
      vm.datetime = this.convertToDatetime(element.datetime);
      vm.locationName = this.getLocationName(element.locationId);
      vm.description = "This is a test";
      vm.icon = this.getIconName(element.priority);

      result[result.length] = vm;
    }
    return result;
  }
  convertToDatetime(dateString: string):string{
    let newDate = new Date(dateString);
    return newDate.toString();
  }

  getIconName(priority: number): string {
    if (priority == 1)
      return "/assets/img/alarm-low.svg"
    if (priority == 2)
      return "/assets/img/alarm-medium.svg"
    return "/assets/img/alarm-high.svg"
  }
  getLocationName(id: string): string {
    let location = this.locationsArray.find(i => i.id === id);
    return location.name;
  }
}
