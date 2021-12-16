function JobCard({ job }) {
  return (
    <div className="parent-wrapper job-card">
      <div className="job-card-container">
        <div className="job-head">
          <span className="job-title">{job.title}</span>
          <div className="job-fit">Best Fit</div>
        </div>
        <div className="job-company">
          <span className="job-company-title">{job.company}</span>
          <span className="job-company-years">4,5</span>
        </div>
        <div className="job-company-details flex">
          <div className="job-company-employees">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgBpVJBTgJBEOyeGaM3eYDR3R+sL1CORlH3JnrRFyAv0H0B/EAP6iYmZhFCPMIPwBewEuMZvQEz2/ZshCABSbAPu1M9Xd1dPQ3wT8Npx03UyaxJeYyI66T1c953Y+t/qHaP0Zj2CM9M8FjveCaRDT5mRj4iKpKUTZEkLQZxIhP/bN9tj+7FZAImRxzUQxAeKONy9gp3UhoMhrHFgHxjRDTJGScIo47DP4eEvD7Jbbzm99yYtCnau9WVlSOLE4KAkzhP9Y+tmR2kmoicMVAqPQuT9NK/xJT4Neh/zpxBWOta/bvcaRkIYwK6ZEmQP9xyw9rbNYcXCKB5mtv0Z3awpo3PKW+Zc8nkMrtiHkz2vv7uMfmKcbuvzQUsMvuUdxM6/7JUQvjScUirEgJ5c8JiAB3kc24zrHbP2bEDxgR2J9CSQctWGkdQmVNml78OP3SWUHhI6SwyqM22wqEsEPLiaONOb9nIIpbUV6JBIK9ODzazXLSCXJQXrCAI0bbdnEe25vtuj+Pa3KFjsd0JZFn8Wp7gIfRgCaMfniKlizRUiycuTYBGTsxIB1IsV/yXfQNqIL3XM2S/wAAAAABJRU5ErkJggg=="
              className="job-icon"
              alt=""
            />
            <span>More than 1000 employees</span>
          </div>
          <div className="job-company-industry">
            <div>{job.industry}</div>
          </div>
        </div>
        <div className="job-location-wrapper ">
          <div className="flex  justify-between">
            <div className="job-location">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgBjVNBTsJQEJ1pMbJk7QZ6A7wBLI1iaFwY2AgnEE4AnAA8QXWBTUwMChKXcgO5QQsmrlli/P3j/JaWUkriJG2n0/fff/OmH+FAWCMnl81kiipfCzFvmsYqDYfJwtPUKXoy0wegUgI6AyGaNdNwDxI8jp0qom4FbzRAiXOJuNIQigTU4mJBQ2pcX+Qf9gjsd6cAQv9koPsjZDkpWX1HoY0kID+901CJFiE8vcP3HApppvVbOzNcykhT7Ui6fhvWtwQEVb7uQ2blhT1ZOvZ44Qw5D0mQMay7sUMwYsf93RHnkSDfSCgAsmTpq9s0jS6ryD1Pv/O7ChKBRPNtDqutUFCbwdX5ySIiMIOeXTawGgKPPa9HBANe0l17XjvGXWLcljxM7MlXR4FZfLlWMWZpqjaTcohHWd+MMmohK8SdUgGkWVbgyU74NaF/APGYf+VrWI8Igja8pjIte6T3kwRZXeN2oEAg2/Ex75gYSOc2CBr229KKpI8XPDq8Ud/ql8ZLfM3eWQj8WLAf2A3NQsCiWlyr5HtJbCqBiuF42eAz4LfCprXqsf//36FcTzM0Hn+UP8Qj3dPZRgAAAABJRU5ErkJggg=="
                className="job-icon"
                alt=""
              />
              <span className="location">{job.location}</span>
            </div>
            <div className="job-experience">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgB1VNBTsJAFH2/HTHuWJsocBJhaRTRuLG6AG/AEeAG9AawkC5RdE+9AZ7Aghdwq7Tz/Z22hgCJkq54ySR/3rx58//PHyAnaBM5fJm1ia3GMsekn27PS70/DYbj+SURRgSeMugzpcvJimpOveIv61UWeKP3snkJODGEpg509JaolJzxhNluiC6IKeeqEvxm4D1/TERQxRZgyfAr1DXljectc5nRB1GQGlWZ0SNKSiDmIhPaEvqy84UoE1PrQKmmJZdKsahgq45TP+oagWDfVr14Hy+OIjdtmW80i6ibZIGitZabCgcEal+fHc4yKq5XM+4RhoM1+SrhnJrmuKv83cVxHxtgISd21EAX9opZLE0MXwEb39HCl4EK/mPAmo0BaZ6aSXyQYbIITWwB+SuPN/WSi7z4AavJctnXMULbAAAAAElFTkSuQmCC"
                className="job-icon"
                alt=""
              />
              <span className="experience">{job.experience}</span>
            </div>
          </div>
          <div className="job-pay-container flex justify-between">
            <div className="job-pay">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFYSURBVHgBlVI7TsNAEJ1Zb5Q2NUWwb2BOgClRICgNkiOK5ARwBHIDboBSgCWaRLIQpc0J4hvYhAu4TOH1MGsZlBh/4EmWdsbzee/tArTA8z+DZ3+7aqsR0AEEGHT8r93sAJGJiLdEOQ/Ahc4TQDodD9eNAx5X8aAvRYCANtQj3WXKmk+sFOok9HtippsJaaaENPkccTrUZ/1VmzXkAR0SV0w0nF4cL0spRfHN6OijgVHFRKSEddreKjbhjzjw4OU1tlVuBGxgCigSZmNTUcRSiBJQauFOrKSRwfXIikCqExAYFp7/bCB9cEgamyde0sigCv2QdLN7OTzz3lhWZmw4XLvj4byWQRvcc02dpSCY+3n5a2vFQAIaFDkDHI4cBLprHFBSdvbbUauURlwOi3ZZvmxmILM5qd7pd4iU33MT34jxADkl/Izf4T/QjDx/G7TVtJrI5FPowBeuAo1EaxFC8QAAAABJRU5ErkJggg=="
                className="job-icon"
                alt=""
              />
              <span className="pay">Not Specified</span>
            </div>
            <div className="job-timing-container">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBjVNLTgMxDHWSQZQdHADI3KCcAFgiPqUbxHTTcgJ6A65QTgBdwEhsKn5iCZwAOMEEuECXLUpi7HSmgmmLsDTKxHbs55cXAVPsrJctVqKoCog6OIQwye7y07RcMXlQtsl9TNvFX5mIhrK7A+s7R/W4P1Egfcg0WPVIvxoQzhHEuVfKcEw6p4XEFvlboZDzm0k9NuMCo87qhbsiiv3G3vIz+y/v3tvgARp7qx3eX91nVeepCWJ/4PwaI5EcGMEGraTbLA6H6ihrQohasT/Yjl8BXJ040cTRcUCXpzYZ9ijhb0t24yfCTSNim5HL9PZzg7vzzPBfQ9el2WlsqEqfX9V8TthkMuq0l+lfPgshF8XcqvyzkfDXPC9EKktvPs4YcjlHSuFCtS8/jMvBxg6xH7mYZ6avtSDVeghEkQ6rRyMrFpi4PqBqTkORbMUm2Vk5Gli3dFhbuQ5OgU3WA9+YrAdViQ53SG+zDZhhhfpYC0FQjArya6xYe0qLQVC9C06YYXxjuZAMSfo0gBkHS1Im8rpgrRnPHGDPkHJhPWJ5qNQJ0jhQfkzME2CHO099TGW7vPlcByl02BDbQ2fffh4s7BtucNXTHXkkeAAAAABJRU5ErkJggg=="
                className="job-icon"
                alt=""
              />
              <span className="timing">Full time</span>
            </div>
          </div>
        </div>
        <div className="job-description">
          <ul className="styled-list">
            <li
              dangerouslySetInnerHTML={{
                __html:
                  job.description.length > 150
                    ? job.description.substring(0, 200) + "..."
                    : job.description
              }}
            />
          </ul>
        </div>
        <div className="apply-container flex justify-between">
          <span className="apply-button">Apply in</span>
          <div className="reference-sites">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgB7ZNRTsJAEIZntvvgm1xAWk9gPYH6LhqfFF+kJ+AI1Rt4A/UBMbxIaYiv9QbeoCgeoE+GhO6M3RDRgG0X4wMk/Mkms5OZb2d2ZwGWXWgS1Oq/u0KRC4iDUZq+eCfbyZ+AnX7sElk+MyQaNslgRwBHp4f23W85Mg/W7sUNxdbeKFXebEWt3lsDFqmw/RQ7kIqLes2+0vuHcNhEpORjTEFRu/kVKsuv16qeNu/D12sGbjIjbEgrylwHBTwQc9WFw30mvIVpC2Lny87AFSjRHBCJN8+Ptp6nEKTgGw5dWFSdbERmfTePcUUvg3SzOcyuwQdmBxm6Z8fVoChWgpH4Uh9NQkRlkQL+WWtgribfjXhQFmj2ylLt8ljaPwd+dfUJOIFnsK3F4+kAAAAASUVORK5CYII="
              className="ref-icons job-icon"
              alt=""
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7ZDRDYJADIZbZAAWMMIGuAG+GyNPRn1wBieQTdSne0UZQN3AERAXYAC4emeIOUASBBN94Hu4Xnvt3/YAOr4OC24eCyKSFhqglUO4ydvWguTl7Y/BYoAF95O0GvLdbDzYs2O0BUSTkB+AwETAlXg2CMDHJF3PXStU6/VyD3LkyUk7Zy2FTyYS2lJImWQKek/6I7X6zR9WYhChw5N0KO7hszWAXUyqLShXXEz6l6VrXZHAz6Y0GgsKkfgljhhX5X2yci3+X7CjPQ90KDkHjMvTTgAAAABJRU5ErkJggg=="
              className="ref-icons job-icon"
              alt=""
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE2SURBVHgB7ZIxTsMwFIbfs8NMZgaa3KA3oB1RQSILqIKhPQkcoTeADIDE0kgoMxwhPUFSwU6YEFLsxzOqQ2jVNunUob8U+fcf6/NvywA7bZ1wPhiPU/fLcW4l6ujipBXa/OF5OkIQHwB0M4ty/hIEjAoho6vewfQf8DF+uwZttyHPDKToE4WOBIqW1tjhxbkCmDAk/VbFZBj4+Xwhp3SiCEHLF3Ye0IwrGIFyXxMMzNYmvjw9XDhVVcKa/rGfgaO6bLPyL1EGhF45BUpgjUR1sgBF5JE6fyswgyZAC5VCBWxfwRy/Ir67Zg2tznt+wk2HbN1KnENRhLAJ0EjqPRcJ7iyMW3f7AV/JpkCt6UgjDBg6MrDf1jW0FMhP5My8DyFVWBe2EshIr0mzlbqP39tPcdqGneroB0cuakQyqaflAAAAAElFTkSuQmCC"
              className="ref-icons job-icon"
              alt=""
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFJSURBVHgBjVJNUoNQDE5eGXVc9QKdlhPYI9C1Wu3KKS6sJ9CewHqD9gTgRpYgOuOW3oAb8HMB2TryiHmlrQwyaBYkkHz5viQgbO3ZTy8R4AIQB0QUopSr6USPocFQPRw/sbn4ppoggIyEHF2f6uEvkPOaLNg9/FRTjCiWMs/XdHD40ZH5QggKrs76TxVQGrEflPW0NMf9ebWr85ZaTDtTzUAWIyVZtAFKZozL9jyrJlzLjboav8aMAJTFCpqHHtI+xuGRpt0xCG3F1rQp5z0aUE5GjdoQ0/PeI0frOkDJoFy4HHZrKUPb6u07fmqxjBdEzFjSCQHd7+at2wZUECUCYcHFM3UhglYL1PbgWEqPXQb/MEKyN6DJRM+I5O2fAKDQ5COL3QdzrHvcZd7CGHzmxUgFWM+oNRdfHaOD/POCmpfvCOiZ495+w98/dY3yfQTJrQAAAABJRU5ErkJggg=="
              className="ref-icons job-icon"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobCard;
