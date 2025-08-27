import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentLabel',
})
export class DepartmentLabelPipe implements PipeTransform {
  private departments = [
    { name: 'Amazonas', code: 'AMA' },
    { name: 'Áncash', code: 'ANC' },
    { name: 'Apurímac', code: 'APU' },
    { name: 'Arequipa', code: 'ARE' },
    { name: 'Ayacucho', code: 'AYA' },
    { name: 'Cajamarca', code: 'CAJ' },
    { name: 'Callao', code: 'CAL' },
    { name: 'Cusco', code: 'CUS' },
    { name: 'Huancavelica', code: 'HUV' },
    { name: 'Huánuco', code: 'HUA' },
    { name: 'Ica', code: 'ICA' },
    { name: 'Junín', code: 'JUN' },
    { name: 'La Libertad', code: 'LAL' },
    { name: 'Lambayeque', code: 'LAM' },
    { name: 'Lima', code: 'LIM' },
    { name: 'Loreto', code: 'LOR' },
    { name: 'Madre de Dios', code: 'MDD' },
    { name: 'Moquegua', code: 'MOQ' },
    { name: 'Pasco', code: 'PAS' },
    { name: 'Piura', code: 'PIU' },
    { name: 'Puno', code: 'PUN' },
    { name: 'San Martín', code: 'SAM' },
    { name: 'Tacna', code: 'TAC' },
    { name: 'Tumbes', code: 'TUM' },
    { name: 'Ucayali', code: 'UCA' },
  ];

  transform(value: string): string {
    const dept = this.departments.find((d) => d.code === value);
    return dept ? dept.name : value;
  }
}
