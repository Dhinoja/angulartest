import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "tocsv"
})
export class ToCsvPipe implements PipeTransform {
  transform(objArray: any[], column: string[]) {
    if (objArray.length > 0) {
      return objArray
        .map(o => {
          return this.getNestedValue(o, column.slice(0)); //  o[column[0]][column[1]].join(", ");
        })
        .join(", ");
    }
    return "-";
  }

  getNestedValue(jsonObject: any[], column: string[]) {
    if (column.length > 0) {
      var jsonPropertyName = column.splice(0, 1)[0];
      var jsonValue = jsonObject[jsonPropertyName];
      if (jsonValue === null) return null;
      return this.getNestedValue(jsonValue, column);
    }
    return jsonObject;
  }
}
