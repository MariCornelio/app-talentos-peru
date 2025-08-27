import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modalityName',
})
export class ModalityNamePipe implements PipeTransform {
  private modality = [
    { name: 'Remoto', value: 'remote' },
    { name: 'Presencial', value: 'onsite' },
    { name: 'Híbrido', value: 'hybrid' },
  ];

  transform(value: string): string {
    const found = this.modality.find((m) => m.value === value);
    return found ? found.name : value;
  }
}
