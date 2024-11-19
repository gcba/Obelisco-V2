import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  CALENDAR_COLLAPSE,
  CALENDAR_DECK,
  CALENDAR_DEFAULT,
  CALENDAR_LINKS,
  CALENDAR_NO_EVENTS,
  CALENDAR_WITH_REFERENCES,
} from './code-views';

const CalendarDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Predeterminado',
      content: (
        <CodeBox codeHTML={CALENDAR_DEFAULT}>
          <div className="row justify-content-center">
            <div className="calendar">
              <div className="calendar-header">
                <h2 className="calendar-title">Enero</h2>
                <span className="calendar-year">2024</span>
              </div>
              <div className="calendar-body">
                <table>
                  <thead>
                    <tr className="calendar-week-header">
                      <th>
                        <span>D</span>
                      </th>
                      <th>
                        <span>L</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>J</span>
                      </th>
                      <th>
                        <span>V</span>
                      </th>
                      <th>
                        <span>S</span>
                      </th>
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
                      <td>
                        <span>2</span>
                      </td>
                      <td>
                        <span>3</span>
                      </td>
                      <td>
                        <span>4</span>
                      </td>
                      <td>
                        <span>5</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>7</span>
                      </td>
                      <td>
                        <span>8</span>
                      </td>
                      <td>
                        <span>9</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">10</span>
                        </span>
                      </td>
                      <td>
                        <span>11</span>
                      </td>
                      <td>
                        <span>12</span>
                      </td>
                      <td>
                        <span>13</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>14</span>
                      </td>
                      <td>
                        <span>15</span>
                      </td>
                      <td>
                        <span>16</span>
                      </td>
                      <td>
                        <span>17</span>
                      </td>
                      <td>
                        <span>18</span>
                      </td>
                      <td>
                        <span>19</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>21</span>
                      </td>
                      <td>
                        <span>22</span>
                      </td>
                      <td>
                        <span>23</span>
                      </td>
                      <td>
                        <span>24</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">25</span>
                        </span>
                      </td>
                      <td>
                        <span>26</span>
                      </td>
                      <td>
                        <span>27</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>28</span>
                      </td>
                      <td>
                        <span>29</span>
                      </td>
                      <td>
                        <span>30</span>
                      </td>
                      <td>
                        <span>31</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
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
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con enlaces',
      content: (
        <CodeBox codeHTML={CALENDAR_LINKS}>
          <div className="row justify-content-center">
            <div className="calendar">
              <div className="calendar-header">
                <h2 className="calendar-title">Enero</h2>
                <span className="calendar-year">2024</span>
              </div>
              <div className="calendar-body">
                <table>
                  <thead>
                    <tr className="calendar-week-header">
                      <th>
                        <span>D</span>
                      </th>
                      <th>
                        <span>L</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>J</span>
                      </th>
                      <th>
                        <span>V</span>
                      </th>
                      <th>
                        <span>S</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="calendar-week">
                      <td></td>
                      <td>
                        <LinkClient className="calendar-link" title="Nombre del evento.">
                          <span className="active active-secondary">1</span>
                        </LinkClient>
                      </td>
                      <td>
                        <span>2</span>
                      </td>
                      <td>
                        <span>3</span>
                      </td>
                      <td>
                        <span>4</span>
                      </td>
                      <td>
                        <span>5</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>7</span>
                      </td>
                      <td>
                        <span>8</span>
                      </td>
                      <td>
                        <span>9</span>
                      </td>
                      <td>
                        <LinkClient className="calendar-link" title="Nombre del evento.">
                          <span className="active">10</span>
                        </LinkClient>
                      </td>
                      <td>
                        <span>11</span>
                      </td>
                      <td>
                        <span>12</span>
                      </td>
                      <td>
                        <span>13</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>14</span>
                      </td>
                      <td>
                        <span>15</span>
                      </td>
                      <td>
                        <span>16</span>
                      </td>
                      <td>
                        <span>17</span>
                      </td>
                      <td>
                        <span>18</span>
                      </td>
                      <td>
                        <span>19</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>21</span>
                      </td>
                      <td>
                        <span>22</span>
                      </td>
                      <td>
                        <span>23</span>
                      </td>
                      <td>
                        <span>24</span>
                      </td>
                      <td>
                        <LinkClient className="calendar-link" title="Nombre del evento.">
                          <span className="active">25</span>
                        </LinkClient>
                      </td>
                      <td>
                        <span>26</span>
                      </td>
                      <td>
                        <span>27</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>28</span>
                      </td>
                      <td>
                        <span>29</span>
                      </td>
                      <td>
                        <span>30</span>
                      </td>
                      <td>
                        <span>31</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
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
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con dos referencias',
      content: (
        <CodeBox codeHTML={CALENDAR_WITH_REFERENCES}>
          <div className="row justify-content-center">
            <div className="calendar">
              <div className="calendar-header">
                <h2 className="calendar-title">Enero</h2>
                <span className="calendar-year">2024</span>
              </div>
              <div className="calendar-body">
                <table>
                  <thead>
                    <tr className="calendar-week-header">
                      <th>
                        <span>D</span>
                      </th>
                      <th>
                        <span>L</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>J</span>
                      </th>
                      <th>
                        <span>V</span>
                      </th>
                      <th>
                        <span>S</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="calendar-week">
                      <td></td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active-secondary">1</span>
                        </span>
                      </td>
                      <td>
                        <span>2</span>
                      </td>
                      <td>
                        <span>3</span>
                      </td>
                      <td>
                        <span>4</span>
                      </td>
                      <td>
                        <span>5</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>7</span>
                      </td>
                      <td>
                        <span>8</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">9</span>
                        </span>
                      </td>
                      <td>
                        <span>10</span>
                      </td>
                      <td>
                        <span>11</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active-secondary">12</span>
                        </span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active-secondary">13</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>14</span>
                      </td>
                      <td>
                        <span>15</span>
                      </td>
                      <td>
                        <span>16</span>
                      </td>
                      <td>
                        <span>17</span>
                      </td>
                      <td>
                        <span>18</span>
                      </td>
                      <td>
                        <span>19</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>21</span>
                      </td>
                      <td>
                        <span>22</span>
                      </td>
                      <td>
                        <span>23</span>
                      </td>
                      <td>
                        <span>24</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">25</span>
                        </span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">26</span>
                        </span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">27</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>28</span>
                      </td>
                      <td>
                        <span>29</span>
                      </td>
                      <td>
                        <span>30</span>
                      </td>
                      <td>
                        <span>31</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
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
                    <strong>9. </strong>
                    Nombre del evento.
                  </li>
                  <li>
                    <strong>12, 13. </strong>
                    Nombre del evento.
                  </li>
                  <li>
                    <strong>25 al 27. </strong>
                    Nombre del evento.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Con colapsable',
      content: (
        <CodeBox codeHTML={CALENDAR_COLLAPSE}>
          <div className="row justify-content-center">
            <div className="calendar">
              <div className="calendar-header">
                <h2 className="calendar-title">Enero</h2>
                <span className="calendar-year">2024</span>
              </div>
              <div className="calendar-body">
                <table>
                  <thead>
                    <tr className="calendar-week-header">
                      <th>
                        <span>D</span>
                      </th>
                      <th>
                        <span>L</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>J</span>
                      </th>
                      <th>
                        <span>V</span>
                      </th>
                      <th>
                        <span>S</span>
                      </th>
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
                      <td>
                        <span>2</span>
                      </td>
                      <td>
                        <span>3</span>
                      </td>
                      <td>
                        <span>4</span>
                      </td>
                      <td>
                        <span>5</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>7</span>
                      </td>
                      <td>
                        <span>8</span>
                      </td>
                      <td>
                        <span>9</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">10</span>
                        </span>
                      </td>
                      <td>
                        <span>11</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">12</span>
                        </span>
                      </td>
                      <td>
                        <span>13</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>14</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">15</span>
                        </span>
                      </td>
                      <td>
                        <span>16</span>
                      </td>
                      <td>
                        <span>17</span>
                      </td>
                      <td>
                        <span>18</span>
                      </td>
                      <td>
                        <span>19</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>21</span>
                      </td>
                      <td>
                        <span>22</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">23</span>
                        </span>
                      </td>
                      <td>
                        <span>24</span>
                      </td>
                      <td>
                        <span>25</span>
                      </td>
                      <td>
                        <span>26</span>
                      </td>
                      <td>
                        <span title="Nombre del evento.">
                          <span className="active">27</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>28</span>
                      </td>
                      <td>
                        <span>29</span>
                      </td>
                      <td>
                        <span>30</span>
                      </td>
                      <td>
                        <span>31</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="calendar-footer">
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseCalendar1"
                    aria-expanded="false"
                    aria-controls="collapseCalendar1"
                  >
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      calendar_month
                    </span>
                    <span className="collapse-title">Referencia</span>
                  </button>
                  <div id="collapseCalendar1" className="accordion-collapse collapse">
                    <div className="accordion-body">
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
                          <strong>12. </strong>
                          Nombre del evento.
                        </li>
                        <li>
                          <strong>15. </strong>
                          Nombre del evento.
                        </li>
                        <li>
                          <strong>23. </strong>
                          Nombre del evento.
                        </li>
                        <li>
                          <strong>27. </strong>
                          Nombre del evento.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Sin eventos',
      content: (
        <CodeBox codeHTML={CALENDAR_NO_EVENTS}>
          <div className="row justify-content-center">
            <div className="calendar">
              <div className="calendar-header">
                <h2 className="calendar-title">Enero</h2>
                <span className="calendar-year">2024</span>
              </div>
              <div className="calendar-body">
                <table>
                  <thead>
                    <tr className="calendar-week-header">
                      <th>
                        <span>D</span>
                      </th>
                      <th>
                        <span>L</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>M</span>
                      </th>
                      <th>
                        <span>J</span>
                      </th>
                      <th>
                        <span>V</span>
                      </th>
                      <th>
                        <span>S</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="calendar-week">
                      <td></td>
                      <td>
                        <span>1</span>
                      </td>
                      <td>
                        <span>2</span>
                      </td>
                      <td>
                        <span>3</span>
                      </td>
                      <td>
                        <span>4</span>
                      </td>
                      <td>
                        <span>5</span>
                      </td>
                      <td>
                        <span>6</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>7</span>
                      </td>
                      <td>
                        <span>8</span>
                      </td>
                      <td>
                        <span>9</span>
                      </td>
                      <td>
                        <span>10</span>
                      </td>
                      <td>
                        <span>11</span>
                      </td>
                      <td>
                        <span>12</span>
                      </td>
                      <td>
                        <span>13</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>14</span>
                      </td>
                      <td>
                        <span>15</span>
                      </td>
                      <td>
                        <span>16</span>
                      </td>
                      <td>
                        <span>17</span>
                      </td>
                      <td>
                        <span>18</span>
                      </td>
                      <td>
                        <span>19</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>21</span>
                      </td>
                      <td>
                        <span>22</span>
                      </td>
                      <td>
                        <span>23</span>
                      </td>
                      <td>
                        <span>24</span>
                      </td>
                      <td>
                        <span>25</span>
                      </td>
                      <td>
                        <span>26</span>
                      </td>
                      <td>
                        <span>27</span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span>28</span>
                      </td>
                      <td>
                        <span>29</span>
                      </td>
                      <td>
                        <span>30</span>
                      </td>
                      <td>
                        <span>31</span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                    <tr className="calendar-week">
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <span></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <CodeBox codeHTML={CALENDAR_DECK}>
          <div className="container">
            <div className="calendar-deck">
              <div className="calendar">
                <div className="calendar-header">
                  <h2 className="calendar-title">Enero</h2>
                  <span className="calendar-year">2024</span>
                </div>
                <div className="calendar-body">
                  <table>
                    <thead>
                      <tr className="calendar-week-header">
                        <th>
                          <span>D</span>
                        </th>
                        <th>
                          <span>L</span>
                        </th>
                        <th>
                          <span>M</span>
                        </th>
                        <th>
                          <span>M</span>
                        </th>
                        <th>
                          <span>J</span>
                        </th>
                        <th>
                          <span>V</span>
                        </th>
                        <th>
                          <span>S</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="calendar-week">
                        <td></td>
                        <td>
                          <span>1</span>
                        </td>
                        <td>
                          <span>2</span>
                        </td>
                        <td>
                          <span>3</span>
                        </td>
                        <td>
                          <span>4</span>
                        </td>
                        <td>
                          <span>5</span>
                        </td>
                        <td>
                          <span>6</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span>7</span>
                        </td>
                        <td>
                          <span>8</span>
                        </td>
                        <td>
                          <span>9</span>
                        </td>
                        <td>
                          <span title="Nombre del evento.">
                            <span className="active">10</span>
                          </span>
                        </td>
                        <td>
                          <span>11</span>
                        </td>
                        <td>
                          <span>12</span>
                        </td>
                        <td>
                          <span>13</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span>14</span>
                        </td>
                        <td>
                          <span>15</span>
                        </td>
                        <td>
                          <span>16</span>
                        </td>
                        <td>
                          <span>17</span>
                        </td>
                        <td>
                          <span>18</span>
                        </td>
                        <td>
                          <span>19</span>
                        </td>
                        <td>
                          <span>20</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span>21</span>
                        </td>
                        <td>
                          <span>22</span>
                        </td>
                        <td>
                          <span>23</span>
                        </td>
                        <td>
                          <span>24</span>
                        </td>
                        <td>
                          <span>25</span>
                        </td>
                        <td>
                          <span title="Nombre del evento.">
                            <span className="active">26</span>
                          </span>
                        </td>
                        <td>
                          <span>27</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span title="Nombre del evento.">
                            <span className="active">28</span>
                          </span>
                        </td>
                        <td>
                          <span>29</span>
                        </td>
                        <td>
                          <span>30</span>
                        </td>
                        <td>
                          <span>31</span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="calendar-footer">
                  <ul className="calendar-footer-list">
                    <li>
                      <strong>10. </strong>
                      Nombre del evento.
                    </li>
                    <li>
                      <strong>26. </strong>
                      Nombre del evento.
                    </li>
                    <li>
                      <strong>28. </strong>
                      Nombre del evento.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="calendar">
                <div className="calendar-header">
                  <h2 className="calendar-title">Febrero</h2>
                  <span className="calendar-year">2024</span>
                </div>
                <div className="calendar-body">
                  <table>
                    <thead>
                      <tr className="calendar-week-header">
                        <th>
                          <span>D</span>
                        </th>
                        <th>
                          <span>L</span>
                        </th>
                        <th>
                          <span>M</span>
                        </th>
                        <th>
                          <span>M</span>
                        </th>
                        <th>
                          <span>J</span>
                        </th>
                        <th>
                          <span>V</span>
                        </th>
                        <th>
                          <span>S</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="calendar-week">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <span title="Nombre del evento.">
                            <span className="active">1</span>
                          </span>
                        </td>
                        <td>
                          <span>2</span>
                        </td>
                        <td>
                          <span>3</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span>4</span>
                        </td>
                        <td>
                          <span>5</span>
                        </td>
                        <td>
                          <span>6</span>
                        </td>
                        <td>
                          <span>7</span>
                        </td>
                        <td>
                          <span>8</span>
                        </td>
                        <td>
                          <span>9</span>
                        </td>
                        <td>
                          <span>10</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span>11</span>
                        </td>
                        <td>
                          <span>12</span>
                        </td>
                        <td>
                          <span>13</span>
                        </td>
                        <td>
                          <span>14</span>
                        </td>
                        <td>
                          <span>15</span>
                        </td>
                        <td>
                          <span>16</span>
                        </td>
                        <td>
                          <span>17</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span>18</span>
                        </td>
                        <td>
                          <span>19</span>
                        </td>
                        <td>
                          <span>20</span>
                        </td>
                        <td>
                          <span>21</span>
                        </td>
                        <td>
                          <span>22</span>
                        </td>
                        <td>
                          <span>23</span>
                        </td>
                        <td>
                          <span>24</span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span>25</span>
                        </td>
                        <td>
                          <span>26</span>
                        </td>
                        <td>
                          <span>27</span>
                        </td>
                        <td>
                          <span>28</span>
                        </td>
                        <td>
                          <span>29</span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr className="calendar-week">
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Calendario"
        description={[
          'El calendario es una representación visual en forma de tabla que exhibe eventos y fechas importantes correspondientes a los días de la semana de un mes determinado.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del componente podés <a href="https://gcba.github.io/estandares/componentes/calendar/" target="_blank" rel="noopener noreferrer">
            visitar la documentación en Obelisco v.1
            </a>.
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default CalendarDocs;
