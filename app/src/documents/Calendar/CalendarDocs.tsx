import CodeBox from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";

import { CALENDAR} from "./code-views";

const CalendarDocs: React.FC = () => {
  const sections = [
    {
      title: "Calendario",
      h1: true,
      content: (
        <MainDescription description="El calendario es una representación visual en forma de tabla que exhibe eventos y fechas importantes correspondientes a los días de la semana de un mes determinado." />
      ),
    },
    {
      id: "section-1",
      title: "Sin evento",
      content: (
        <>
          <CodeBox codeHTML={CALENDAR}>
            <div className="container">
              lorem
            </div>
          </CodeBox>
          {/* <div className="calendar">
            <div className="calendar-header">
              <h2 className="calendar-title">Enero</h2>
              <span className="calendar-year">2024</span>
            </div>
            <div className="calendar-body">
              <table>
                <thead>
                  <tr className="calendar-week-header">
                    <th><span>D</span></th>
                    <th><span>L</span></th>
                    <th><span>M</span></th>
                    <th><span>M</span></th>
                    <th><span>J</span></th>
                    <th><span>V</span></th>
                    <th><span>S</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="calendar-week">
                    <td></td>
                    <td><span>1</span></td>
                    <td><span>2</span></td>
                    <td><span>3</span></td>
                    <td><span>4</span></td>
                    <td><span>5</span></td>
                    <td><span>6</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>7</span></td>
                    <td><span>8</span></td>
                    <td><span>9</span></td>
                    <td><span>10</span></td>
                    <td><span>11</span></td>
                    <td><span>12</span></td>
                    <td><span>13</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>14</span></td>
                    <td><span>15</span></td>
                    <td><span>16</span></td>
                    <td><span>17</span></td>
                    <td><span>18</span></td>
                    <td><span>19</span></td>
                    <td><span>20</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>21</span></td>
                    <td><span>22</span></td>
                    <td><span>23</span></td>
                    <td><span>24</span></td>
                    <td><span>25</span></td>
                    <td><span>26</span></td>
                    <td><span>27</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>28</span></td>
                    <td><span>29</span></td>
                    <td><span>30</span></td>
                    <td><span>31</span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </>
      ),
    },
    {
      id: "section-2",
      title: "Con eventos - predeterminado",
      content: (
        <>
          <p>
            Ocupa 6 columnas en Desktop. Se utiliza dentro del bloque
            institucional en páginas de área, antes del footer.
          </p>

          {/* <div className="calendar">
            <div className="calendar-header">
              <h2 className="calendar-title">Enero</h2>
              <span className="calendar-year">2024</span>
            </div>
            <div className="calendar-body">
              <table>
                <thead>
                  <tr className="calendar-week-header">
                    <th><span>D</span></th>
                    <th><span>L</span></th>
                    <th><span>M</span></th>
                    <th><span>M</span></th>
                    <th><span>J</span></th>
                    <th><span>V</span></th>
                    <th><span>S</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="calendar-week">
                    <td></td>
                    <td>
                      <span title="Nombre del evento.">
                        <span className="active">1</span>
                      </span>
                    </td>
                    <td><span>2</span></td>
                    <td><span>3</span></td>
                    <td><span>4</span></td>
                    <td><span>5</span></td>
                    <td><span>6</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>7</span></td>
                    <td><span>8</span></td>
                    <td><span>9</span></td>
                    <td>
                      <span title="Nombre del evento.">
                        <span className="active">10</span>
                      </span>
                    </td>
                    <td><span>11</span></td>
                    <td><span>12</span></td>
                    <td><span>13</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>14</span></td>
                    <td><span>15</span></td>
                    <td><span>16</span></td>
                    <td><span>17</span></td>
                    <td><span>18</span></td>
                    <td><span>19</span></td>
                    <td><span>20</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>21</span></td>
                    <td><span>22</span></td>
                    <td><span>23</span></td>
                    <td><span>24</span></td>
                    <td>
                      <span title="Nombre del evento.">
                        <span className="active">25</span>
                      </span>
                    </td>
                    <td><span>26</span></td>
                    <td><span>27</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>28</span></td>
                    <td><span>29</span></td>
                    <td><span>30</span></td>
                    <td><span>31</span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="calendar-footer">
              <ul className="calendar-footer-list">
                <li>
                  <strong>1. </strong>
                  Nombre del evento.
                </li>
                <li>
                  <strong>10. </strong>
                  Nombre del evento.
                </li>
                <li>
                  <strong>25. </strong>
                  Nombre del evento.
                </li>
              </ul>
            </div>
          </div> */}
        </>
      ),
    },
    {
      id: "section-3",
      title: "Con eventos - enlaces",
      content: (
        <>
          <div className="calendar">
            <div className="calendar-header">
              <h2 className="calendar-title">Enero</h2>
              <span className="calendar-year">2024</span>
            </div>
            <div className="calendar-body">
              <table>
                <thead>
                  <tr className="calendar-week-header">
                    <th><span>D</span></th>
                    <th><span>L</span></th>
                    <th><span>M</span></th>
                    <th><span>M</span></th>
                    <th><span>J</span></th>
                    <th><span>V</span></th>
                    <th><span>S</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="calendar-week">
                    <td></td>
                    <td>
                      <a href="#" className="calendar-link" title="Nombre del evento.">
                        <span className="active-secondary">1</span>
                      </a>
                    </td>
                    <td><span>2</span></td>
                    <td><span>3</span></td>
                    <td><span>4</span></td>
                    <td><span>5</span></td>
                    <td><span>6</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>7</span></td>
                    <td><span>8</span></td>
                    <td><span>9</span></td>
                    <td>
                      <a href="#" className="calendar-link" title="Nombre del evento.">
                        <span className="active">10</span>
                      </a>
                    </td>
                    <td><span>11</span></td>
                    <td><span>12</span></td>
                    <td><span>13</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>14</span></td>
                    <td><span>15</span></td>
                    <td><span>16</span></td>
                    <td><span>17</span></td>
                    <td><span>18</span></td>
                    <td><span>19</span></td>
                    <td><span>20</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>21</span></td>
                    <td><span>22</span></td>
                    <td><span>23</span></td>
                    <td><span>24</span></td>
                    <td>
                      <a href="#" className="calendar-link" title="Nombre del evento.">
                        <span className="active">25</span>
                      </a>
                    </td>
                    <td><span>26</span></td>
                    <td><span>27</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>28</span></td>
                    <td><span>29</span></td>
                    <td><span>30</span></td>
                    <td><span>31</span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="calendar-footer">
              <ul className="calendar-footer-list">
                <li>
                  <strong>1. </strong>
                  Nombre del evento.
                </li>
                <li>
                  <strong>10. </strong>
                  Nombre del evento.
                </li>
                <li>
                  <strong>25. </strong>
                  Nombre del evento.
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "section-4",
      title: "Con eventos - enlaces",
      content: (
        <>
          <div className="calendar">
            <div className="calendar-header">
              <h2 className="calendar-title">Enero</h2>
              <span className="calendar-year">2024</span>
            </div>
            <div className="calendar-body">
              <table>
                <thead>
                  <tr className="calendar-week-header">
                    <th><span>D</span></th>
                    <th><span>L</span></th>
                    <th><span>M</span></th>
                    <th><span>M</span></th>
                    <th><span>J</span></th>
                    <th><span>V</span></th>
                    <th><span>S</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="calendar-week">
                    <td></td>
                    <td>
                      <a href="#" className="calendar-link" title="Nombre del evento.">
                        <span className="active">1</span>
                      </a>
                    </td>
                    <td><span>2</span></td>
                    <td><span>3</span></td>
                    <td><span>4</span></td>
                    <td><span>5</span></td>
                    <td><span>6</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>7</span></td>
                    <td><span>8</span></td>
                    <td><span>9</span></td>
                    <td>
                      <a href="#" className="calendar-link" title="Nombre del evento.">
                        <span className="active">10</span>
                      </a>
                    </td>
                    <td><span>11</span></td>
                    <td><span>12</span></td>
                    <td><span>13</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>14</span></td>
                    <td><span>15</span></td>
                    <td><span>16</span></td>
                    <td><span>17</span></td>
                    <td><span>18</span></td>
                    <td><span>19</span></td>
                    <td><span>20</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>21</span></td>
                    <td><span>22</span></td>
                    <td><span>23</span></td>
                    <td><span>24</span></td>
                    <td>
                      <a href="#" className="calendar-link" title="Nombre del evento.">
                        <span className="active">25</span>
                      </a>
                    </td>
                    <td><span>26</span></td>
                    <td><span>27</span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span>28</span></td>
                    <td><span>29</span></td>
                    <td><span>30</span></td>
                    <td><span>31</span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                  <tr className="calendar-week">
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="calendar-footer">
              <ul className="calendar-footer-list">
                <li>
                  <strong>1. </strong>
                  Nombre del evento.
                </li>
                <li>
                  <strong>10. </strong>
                  Nombre del evento.
                </li>
                <li>
                  <strong>25. </strong>
                  Nombre del evento.
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "section-5",
      title: "Con eventos - referencia cromaticas",
      content: (
        <>
          <div className="calendar">
  <div className="calendar-header">
    <h2 className="calendar-title">Enero</h2>
    <span className="calendar-year">2024</span>
  </div>
  <div className="calendar-body">
    <table>
      <thead>
        <tr className="calendar-week-header">
          <th><span>D</span></th>
          <th><span>L</span></th>
          <th><span>M</span></th>
          <th><span>M</span></th>
          <th><span>J</span></th>
          <th><span>V</span></th>
          <th><span>S</span></th>
        </tr>
      </thead>
      <tbody>
        <tr className="calendar-week">
          <td></td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-coral">1</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-musket">2</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-citrus">3</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-lime">4</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-sky">5</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-pistachio">6</span>
            </span>
          </td>
        </tr>
        <tr className="calendar-week">
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-berries">7</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-lavender">8</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-aqua">9</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-avocado">10</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-strawberry">11</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-blackberry">12</span>
            </span>
          </td>
          <td>
            <span title="Nombre del evento.">
              <span className="active bg-gray">13</span>
            </span>
          </td>
        </tr>
        <tr className="calendar-week">
          <td><span>14</span></td>
          <td><span>15</span></td>
          <td><span>16</span></td>
          <td><span>17</span></td>
          <td><span>18</span></td>
          <td><span>19</span></td>
          <td><span>20</span></td>
        </tr>
        <tr className="calendar-week">
          <td><span>21</span></td>
          <td><span>22</span></td>
          <td><span>23</span></td>
          <td><span>24</span></td>
          <td><span>25</span></td>
          <td><span>26</span></td>
          <td><span>27</span></td>
        </tr>
        <tr className="calendar-week">
          <td><span>28</span></td>
          <td><span>29</span></td>
          <td><span>30</span></td>
          <td><span>31</span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr className="calendar-week">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="calendar-footer">
    <div className="accordion">
      <div className="card">
        <button
          className="card-header collapsed"
          data-toggle="collapse"
          data-target="#collapseEnero"
        >
          <i className="bx bx-calendar"></i>
          <span className="collapse-title">Referencias</span>
        </button>
        <div id="collapseEnero" className="collapse">
          <div className="card-body">
            <ul className="calendar-footer-list">
              <li>
                <strong>1. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>2. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>3. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>4. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>5. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>6. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>7. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>8. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>9. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>10. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>11. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>12. </strong>
                Nombre del evento.
              </li>
              <li>
                <strong>13. </strong>
                Nombre del evento.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default CalendarDocs;
