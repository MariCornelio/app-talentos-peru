import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Skeleton } from 'primeng/skeleton';
import { Select } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ApplicantStoreService } from '../../services/applicant-store-service';
import { DepartmentLabelPipe } from '../../../../shared/pipes/departamentLabel.pipe';
import { ModalityNamePipe } from '../../../../shared/pipes/modalityName.pipe';

@Component({
  selector: 'app-list-jobs',
  imports: [
    ReactiveFormsModule,
    InputIcon,
    InputTextModule,
    IconField,
    ButtonModule,
    Skeleton,
    Select,
    MultiSelect,
    CommonModule,
    DividerModule,
    DepartmentLabelPipe,
    ModalityNamePipe,
  ],
  templateUrl: './list-jobs.html',
  styleUrl: './list-jobs.css',
})
export class ListJobs {
  skeletonArray = Array(3);
  jobsForm: FormGroup;
  departments = [
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

  disability = [
    { name: 'Si', value: true },
    {
      name: 'No',
      value: false,
    },
  ];
  modality = [
    { name: 'Remoto', value: 'remote' },
    { name: 'Presencial', value: 'onsite' },
    { name: 'Híbrido', value: 'hybrid' },
  ];
  workingHours = [
    { name: 'Tiempo Completo', value: 'full_time' },
    { name: 'Tiempo Parcial', value: 'part_time' },
    { name: 'Por horas', value: 'hourly' },
    { name: 'Beca/Prácticas', value: 'internship' },
  ];

  workArea = [
    { name: 'Tecnología', value: 'technology' },
    { name: 'Administración', value: 'administration' },
    { name: 'Contabilidad / Finanzas', value: 'finance' },
    { name: 'Marketing / Publicidad', value: 'marketing' },
    { name: 'Recursos Humanos', value: 'hr' },
    { name: 'Educación / Docencia', value: 'education' },
    { name: 'Ventas / Comercial', value: 'sales' },
    { name: 'Logística / Almacén', value: 'logistics' },
    { name: 'Atención al Cliente', value: 'customer_service' },
    { name: 'Salud', value: 'health' },
    { name: 'Ingeniería', value: 'engineering' },
    { name: 'Legal', value: 'legal' },
    { name: 'Diseño / Creatividad', value: 'design' },
    { name: 'Producción / Manufactura', value: 'manufacturing' },
    { name: 'Investigación / Ciencia', value: 'research' },
  ];

  constructor(
    private builder: FormBuilder,
    public jobsStoreSvc: ApplicantStoreService
  ) {
    this.jobsForm = this.builder.group({
      name: [''],
      location: [null],
      workArea: [[]],
      modality: [null],
      workingHours: [null],
      disability: [null],
    });
  }

  clearWorkArea(): void {
    this.jobsForm.get('workArea')?.setValue([]);
  }
  ngOnInit() {
    this.jobsStoreSvc.loadJobsIfNeeded();
    console.log(this.jobsStoreSvc.jobs());
  }
}
