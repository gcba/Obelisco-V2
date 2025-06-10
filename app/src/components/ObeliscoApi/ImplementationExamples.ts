export const footerCompleteImplementationReact = `
import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [footer, setFooter] = useState();
  const { links, socialMedia, phones, images } = footer || {};

  useEffect(() => {
    fetch('http://localhost:3000/api/footer/complete')
      .then((res) => res.json())
      .then((data) => setFooter(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <footer className="main-footer">
      <div className="container">
        <section>
          <h3>Teléfonos útiles</h3>
          <ul className="list-inline">
            {phones?.map((phone) => (
              <li
                className="list-inline-item phone-items"
                key={phone.id}
              >
                <a href={phone.number}>{phone.name}</a>
              </li>
            ))}
          </ul>
          <a href="https://buenosaires.gob.ar/inicio/telefonos">
            Ver todos los teléfonos
          </a>
        </section>

        <section>
          <h3>Redes de la ciudad</h3>
          <ul className="list-inline">
            {socialMedia?.map((sm) =>
                <li
                  className={'list-inline-item redes-items  ' + (sm.name == 'X' ? sm.icon : '')}
                  key={sm.id}
                >
                  <a href={sm.url}>
                    <i className={(sm.name !== 'X' ? sm.icon  : '')}></i>
                    {sm.name}
                  </a>
                </li>
            )}
          </ul>
        </section>
      </div>
      <hr className="divider" />
      <div className="container">
        <section className="footer-legal-section">
          <h3 className="sr-only">Información gubernamental</h3>
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-xl-4 footer-content-img">
              <img
                className="d-md-none"
                src={images ? 'http://localhost:3000/' + (images[1]?.url ?? '') : ''}
                alt="Logo de Ciudad de Buenos Aires"
                height="48"
              />
              <img
                className="d-none d-md-inline"
                src={images ? 'http://localhost:3000/' + (images[0]?.url ?? '') : ''}
                alt="Logo de Ciudad de Buenos Aires"
                height="40"
              />
              <img
                className="img-vamos-ba"
                src={images ? 'http://localhost:3000/' + (images[2]?.url ?? '') : ''}
                alt="Logo de Vamos Buenos Aires"
              />
            </div>
            <div className="col-12">
              <ul className="list-inline">
                {links?.map((link) => (
                  <li
                    className="list-inline-item"
                    key={link.id}
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="footer-license-text">
            Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
            Commons Reconocimiento 2.5 Argentina License.
          </div>
        </section>
      </div>
    </footer>
  );
}
`

export const footerCompleteImplementationAngular = `
// SERVICIO
@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private apiUrl = 'http://localhost:3000/api/footer/complete';

  constructor(private http: HttpClient) {}

  getFooterData(): Observable<FooterData> {
    return this.http.get<FooterData>(this.apiUrl);
  }
}

// COMPONENTE
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [FooterService], 
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  footerData?: FooterData;

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.footerService.getFooterData().subscribe({
      next: (data) => (this.footerData = data),
      error: (err) => console.error(err),
    });
  }
}

// HTML 
<footer class="main-footer" *ngIf="footerData">
  <div class="container">
    <section>
      <h3>Teléfonos útiles</h3>
      <ul class="list-inline">
        <li *ngFor="let phone of footerData.phones" class="list-inline-item phone-items">
          <a [href]="phone.number">{{ phone.name }}</a>
        </li>
      </ul>
      <a href="https://buenosaires.gob.ar/inicio/telefonos">Ver todos los teléfonos</a>
    </section>

    <section>
      <h3>Redes de la ciudad</h3>
        <ul class="list-inline">
          <ng-container *ngFor="let sm of footerData.socialMedia">
            <li
              *ngIf="sm.name === 'Twitter'; else normalSocial"
              class="list-inline-item redes-items"
              [ngClass]="sm.icon"
              [attr.key]="sm.id"
            >
              <a [href]="sm.url">{{ sm.name }}</a>
            </li>

            <ng-template #normalSocial>
              <li class="list-inline-item redes-items" [attr.key]="sm.id">
                <a [href]="sm.url">
                  <i [class]="sm.icon"></i>
                  {{ sm.name }}
                </a>
              </li>
            </ng-template>
          </ng-container>
        </ul>
    </section>
  </div>

  <hr class="divider" />
  <div class="container">
    <section class="footer-legal-section">
      <h3 class="sr-only">Información gubernamental</h3>
      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-xl-4 footer-content-img">
          <img *ngIf="footerData.images[1]?.url" class="d-md-none"
            [src]="'http://localhost:3000/' + footerData.images[1].url" alt="Logo de Ciudad de Buenos Aires" height="48"
            width="160" />
          <img *ngIf="footerData.images[0]?.url" class="d-none d-md-inline"
            [src]="'http://localhost:3000/' + footerData.images[0].url" alt="Logo de Ciudad de Buenos Aires" height="40"
            width="160" />
          <img *ngIf="footerData.images[2]?.url" class="img-vamos-ba"
            [src]="'http://localhost:3000/' + footerData.images[2].url" alt="Logo de Vamos Buenos Aires" height="40"
            width="160" />
        </div> 
        <div class="col-12">
          <ul class="list-inline">
            <li *ngFor="let link of footerData.links" class="list-inline-item">
              <a [href]="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <div class="footer-license-text">
        Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
        Commons Reconocimiento 2.5 Argentina License.
      </div>
    </section>
  </div>
</footer>



`