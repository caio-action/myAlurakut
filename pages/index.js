import MainGrid from '../src/Components/MainGrid'
import Box from '../src/Components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/Components/ProfileRelations';

function ProfileSidebar(Propriedades) {
  return(
  <Box >
  <img src={`https://github.com/${Propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
</Box>
)
}

export default function Home() {
  const githubUser = 'caio-action';
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto' ,
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',]

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
       <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box >
          <h1 className= "title" >
            Bem Vindo (a )
            </h1>

          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
          {pessoasFavoritas.map((itemAtual) => {
            return (
              <li>
              <a href={`/users/${itemAtual}`} key={itemAtual}>
                <img src={ `https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>

              </a>
              </li>
          )
            })}
            </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
