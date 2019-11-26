import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreService } from '../shared/sobre.service';

@Component({
  selector: 'app-sobre-usuarios',
  templateUrl: './sobre-usuarios.page.html',
  styleUrls: ['./sobre-usuarios.page.scss'],
})
export class SobreUsuariosPage implements OnInit {
  formUsuarios: FormGroup;
  key: string;

  private file: File = null;
  imgUrl = '';
  filePath = '';
  result: void;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private sobreService: SobreService,
              private router: Router ) { }

  ngOnInit() {
    this .criarFormulario();

    this  .key = this .route.snapshot.paramMap.get('key');
    if (this .key) {
      const subscribe = this .sobreService .getByKey(this .key).subscribe((usuarios:any) => {
        subscribe.unsubscribe();
        this .formUsuarios.setValue({
          img: ''
        });
        this .imgUrl = usuarios.img || '';
        this .filePath = usuarios.filePath || '';
       });
    }
  }

  get nome() { return this.formUsuarios.get('nome'); }
  get email() { return this.formUsuarios.get('email'); }
  get senha() { return this.formUsuarios.get('senha'); }

  criarFormulario() {
    this .key = null;
    this .formUsuarios = this .formBuilder.group({
      img: ['']
    });

    this .file = null;
    this .imgUrl = '';
    this .filePath = '';
  }

  upload(event: any) {
    if (event.target.files.length) {
      this .file = event.target.files[0];
    } else {
      this .file = null;
    }
  }

  onSubmit() {
    if (this .formUsuarios.valid) {
      let result: Promise< {}>;

      if (this .key) {
        result = this .sobreService.update(this .formUsuarios.value, this .key);
      }
      if (this .file) {
        result.then( (key: string) => {
          this .sobreService.uploadImg(key, this .file);
          this .criarFormulario();
        });
      }
    }
  }
}
