import { StationModel } from "./StationModel";
import TaskModel from "./TaskModel";

export interface TourModel extends TaskModel {
  stations?: StationModel[];
}
