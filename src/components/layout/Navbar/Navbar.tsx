import { useTheme } from '@mui/material/styles'
import { FC, ReactElement, useContext, useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { ColorModeContext } from '../../../context/theme-context'
import { routes } from '../../../routes'
import AuthContext from '../../../context/auth-context'

export const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const { isLoggedIn } = useContext(AuthContext)

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const colorMode = useContext(ColorModeContext)
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'nav.main',
        position: 'fixed',
        top: '0',
        zIndex: '100',
        color: 'nav.text',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Starter App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes
                .filter((el) => (isLoggedIn ? el : el.access !== 'private'))
                .map((page) => (
                  <Link
                    key={page.key}
                    component={NavLink}
                    to={page.path}
                    color="text.primary"
                    underline="none"
                    variant="button"
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            React Starter App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: '1rem',
              }}
            >
              {routes
                .filter((el) => (isLoggedIn ? el : el.access !== 'private'))
                .map((page) => (
                  <Link
                    key={page.key}
                    component={NavLink}
                    to={page.path}
                    color="nav.text"
                    underline="none"
                    variant="button"
                    sx={{ fontSize: 'large', marginLeft: '2rem' }}
                  >
                    {page.title}
                  </Link>
                ))}
            </Box>
          </Box>
          <IconButton
            to={'/login-sign-up'}
            component={NavLink}
            sx={{ ml: 1 }}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </Box>
  )
}
