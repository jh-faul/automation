Search.setIndex({"docnames": ["code/ansible", "code/ansible/helpers", "code/ansible/setup_kvm", "code/cleanup", "code/deploy", "code/setup_eto", "code/utils", "code/utils/cloud_init", "code/utils/docker", "code/utils/utils", "index", "playbooks", "setup"], "filenames": ["code/ansible.rst", "code/ansible/helpers.rst", "code/ansible/setup_kvm.rst", "code/cleanup.rst", "code/deploy.rst", "code/setup_eto.rst", "code/utils.rst", "code/utils/cloud_init.rst", "code/utils/docker.rst", "code/utils/utils.rst", "index.rst", "playbooks.rst", "setup.rst"], "titles": ["How Deployment Happens", "Ansible Python Helpers", "KVM Setup", "Cleanup", "Deployment", "Setup ETO Web UI", "Utils", "Cloud Init Module", "Docker Module", "Utils Module", "Welcome to Virtual Machine Deployment Automation\u2019s documentation!", "Ansible Playbooks", "Setup"], "terms": {"ansibl": [0, 10, 12], "python": [0, 3, 4, 10, 12], "helper": [0, 10, 12], "create_directori": [0, 1], "download_or_retrieve_fil": [0, 1], "download_extract_and_rename_qcow2": [0, 1], "generate_cloud_init_fil": [0, 1], "generate_cloud_init_iso": [0, 1], "clean_up_sensitive_info": [0, 1], "kvm": [0, 10, 11], "setup": [0, 10, 11], "role": [1, 11], "build_kvm": 1, "file": [1, 2, 4, 8, 9, 11, 12], "path": [1, 2, 3, 4, 8, 11, 12], "sourc": [1, 3, 4, 7, 8, 9, 11, 12], "url_or_fil": 1, "download": [1, 2], "from": [1, 11, 12], "url": [1, 11, 12], "str": [1, 4, 7, 8, 9], "The": [1, 4, 7, 9, 11, 12], "local": [1, 11, 12], "absolut": 1, "where": [1, 11], "i": [1, 7, 8, 9, 11, 12], "save": 1, "thi": [1, 2, 3, 4, 7, 11, 12], "function": [1, 3, 4, 7, 9, 11, 12], "support": [1, 11, 12], "http": 1, "well": 1, "handl": 1, "print": [1, 2], "log": [1, 4, 9, 12], "purpos": [1, 2, 12], "extract_path": 1, "new_qcow_fil": 1, "none": [1, 4, 7, 8, 9, 12], "loc_dir": 1, "extract": [1, 2, 11], "option": [1, 4, 7, 11, 12], "renam": [1, 2, 11], "qcow2": [1, 2, 11], "content": 1, "new": [1, 12], "name": [1, 4, 8, 9, 11, 12], "default": [1, 7, 9, 11, 12], "directori": [1, 2, 12], "within": [1, 7], "place": 1, "tupl": 1, "A": [1, 4, 7], "contain": [1, 2, 3, 4, 8, 12], "us": [1, 2, 4, 7, 8, 11, 12], "provid": [1, 2, 4, 7, 9, 11, 12], "It": [1, 3, 4, 11, 12], "specifi": [1, 2, 9, 11, 12], "If": [1, 4, 7, 8, 9, 12], "accordingli": [1, 12], "vm_usernam": [1, 11, 12], "vm_hashed_password": [1, 11], "cloud_init_user_data_output": 1, "cloud_init_meta_data_output": 1, "vm_hostnam": [1, 11, 12], "vm_static_ip_address": [1, 11, 12], "vm_ip_gatewai": [1, 11, 12], "vm_ip_netmask": [1, 11, 12], "vm_dns_server_1": [1, 11, 12], "vm_dns_server_2": [1, 11, 12], "gener": [1, 2, 7, 12], "cloud": [1, 2, 6, 10, 12], "init": [1, 2, 6, 10, 12], "script": [1, 2, 4, 11, 12], "configur": [1, 2, 3, 4, 7, 9, 11, 12], "virtual": [1, 2, 4, 11], "machin": [1, 4, 11], "usernam": [1, 11, 12], "hash": [1, 7], "password": [1, 7, 11, 12], "user": [1, 2, 11, 12], "output": [1, 12], "data": [1, 2, 12], "metadata": [1, 2], "hostnam": [1, 2, 11, 12], "static": [1, 11, 12], "ip": [1, 11, 12], "address": [1, 11, 12], "gatewai": [1, 11, 12], "netmask": 1, "primari": [1, 11, 12], "dn": [1, 11, 12], "server": [1, 11, 12], "secondari": [1, 11, 12], "creat": [1, 2, 11, 12], "templat": [1, 10], "base": [1, 4, 9, 11, 12], "includ": [1, 12], "network": [1, 2, 11, 12], "set": [1, 2, 4, 9, 11, 12], "written": [1, 9], "while": 1, "onli": 1, "cloud_init_iso_nam": 1, "user_data_directori": 1, "meta_data_directori": 1, "iso": [1, 2], "imag": [1, 2, 11, 12], "genisoimag": 1, "command": [1, 2, 3, 4, 11, 12], "line": [1, 2, 3, 4], "tool": [1, 2], "combin": 1, "files_to_delet": 1, "list": [1, 4], "delet": [1, 11, 12], "sensit": [1, 2], "system": [1, 11, 12], "iter": 1, "through": [1, 12], "attempt": 1, "each": [1, 4, 12], "o": [1, 7, 11, 12], "remov": [1, 2, 11, 12], "success": [1, 4, 11], "messag": [1, 4, 12], "indic": [1, 12], "wa": 1, "fail": 1, "due": 1, "an": [1, 2, 3, 4, 11, 12], "oserror": 1, "error": [1, 4, 9], "code": [2, 12], "orchestr": [2, 12], "launch": 2, "veto": [2, 11], "encrypt": 2, "traffic": 2, "hypervisor": [2, 4, 11, 12], "step": [2, 4], "pars": [2, 3, 4, 12], "argument": [2, 3, 4, 12], "paramet": [2, 12], "necessari": [2, 11, 12], "vm": [2, 10, 11], "requir": [2, 4, 10, 12], "which": [2, 7, 9, 12], "detail": [2, 12], "etc": 2, "initi": [2, 12], "check": [2, 4, 8, 12], "disk": 2, "exist": [2, 12], "rais": 2, "except": 2, "construct": 2, "virt": 2, "instal": [2, 4, 10], "prepar": 2, "bridg": [2, 11, 12], "interfac": [2, 12], "bring": 2, "them": 2, "up": [2, 4, 9, 11, 12], "execut": [2, 4, 11, 12], "shell": 2, "debug": [2, 4, 9], "clean": [2, 11], "inform": [2, 10], "temporari": [2, 11], "relat": [2, 12], "process": [2, 10, 11, 12], "cleanup_func": [3, 10], "config_opt": 3, "cleanup_log_nam": 3, "log_level": [3, 4, 9], "use_dock": [3, 4], "true": [3, 4, 8, 12], "parse_cleanup_argu": [3, 10], "argpars": [3, 4], "namespac": [3, 4], "usag": [3, 4, 10], "deploi": [3, 4, 11, 12], "py": [3, 4, 12], "config": [3, 4, 11, 12], "json": [3, 4, 12], "object": [3, 4, 9], "builder_func": [4, 10], "build_opt": 4, "install_log_nam": 4, "seri": 4, "build": [4, 8, 12], "dictionari": 4, "level": [4, 9, 12], "For": [4, 10], "perform": [4, 11, 12], "variou": [4, 11], "task": [4, 11, 12], "packag": [4, 11, 12], "failur": 4, "ansible_log_writer_analyz": 4, "ansible_run_check": 4, "occur": 4, "fals": [4, 8, 12], "otherwis": [4, 8, 12], "upon": 4, "complet": 4, "parse_deployment_argu": [4, 10], "dir": [4, 12], "allow": [4, 11, 12], "enrol": [4, 12], "modul": [6, 10], "generate_random_salt": [6, 7], "cloud_init_sha512_crypt": [6, 7], "docker": [6, 10, 12], "is_docker_run": [6, 8], "is_container_run": [6, 8], "start_contain": [6, 8], "stop_contain": [6, 8], "ensure_container_run": [6, 8], "setup_log": [6, 9], "color": [6, 9], "util": [7, 8, 10, 12], "cloud_init": 7, "cryptograph": 7, "secur": [7, 12], "random": 7, "salt": 7, "hexadecim": 7, "string": 7, "repres": [7, 12], "urandom": 7, "16": 7, "byte": 7, "entropi": 7, "convert": 7, "suitabl": 7, "algorithm": 7, "enhanc": 7, "prevent": 7, "rainbow": 7, "tabl": 7, "attack": 7, "round": 7, "int": 7, "sha": 7, "512": 7, "crypt": 7, "valu": [7, 11], "number": [7, 11, 12], "5000": 7, "must": 7, "rang": 7, "1000": 7, "999999999": 7, "8": [7, 11, 12], "charact": 7, "determin": 7, "result": 7, "daemon": 8, "run": [8, 11, 12], "bool": 8, "container_nam": 8, "compose_fil": 8, "start": [8, 10], "compos": [8, 12], "stop": [8, 11], "ensur": [8, 11, 12], "filenam": 9, "desir": 9, "one": 9, "info": [9, 12], "warn": 9, "critic": 9, "write": 9, "given": 9, "recogn": 9, "class": 9, "purpl": 9, "x1b": 9, "95m": 9, "cyan": 9, "96m": 9, "darkcyan": 9, "36m": 9, "blue": 9, "94m": 9, "green": 9, "92m": 9, "yellow": 9, "93m": 9, "red": [9, 11], "91m": 9, "bold": 9, "1m": 9, "underlin": 9, "4m": 9, "end": [9, 12], "0m": 9, "get": 10, "descript": [10, 11], "eto": 10, "via": [10, 11], "api": [10, 11], "cleanup": [10, 11], "playbook": 10, "install_kvm": 10, "ssh_setup_individu": 10, "cleanup_hypervisor": 10, "web": 10, "ui": 10, "how": 10, "happen": 10, "more": [10, 11, 12], "about": 10, "see": 10, "yml": 11, "design": [11, 12], "remot": 11, "host": [11, 12], "follow": [11, 12], "either": 11, "present": 11, "automat": [11, 12], "domain": 11, "link": 11, "creation": 11, "seamless": 11, "integr": 11, "access": [11, 12], "you": [11, 12], "have": [11, 12], "properli": 11, "befor": 11, "extra": 11, "var": [11, 12], "hypervisor_hostnam": [11, 12], "hypervisor_vm_image_loc": [11, 12], "hypervisor_dest_directori": [11, 12], "vm_qcow_nam": [11, 12], "vm_vcpu": [11, 12], "vm_memori": [11, 12], "vm_os_vari": [11, 12], "os_vari": 11, "vm_boot": [11, 12], "vm_cpu": [11, 12], "vm_sourc": [11, 12], "vm_model": [11, 12], "vm_source_mod": [11, 12], "vm_network_net_a": [11, 12], "vm_network_net_b": [11, 12], "vm_network_app_a": [11, 12], "vm_network_app_b": [11, 12], "vm_network_mir_a": [11, 12], "vm_network_mir_b": [11, 12], "replac": 11, "placehold": 11, "appropri": 11, "your": [11, 12], "environ": 11, "exampl": [11, 12], "192": 11, "168": 11, "1": [11, 12], "100": 11, "hypervisor_usernam": [11, 12], "admin": [11, 12], "hypervisor_password": [11, 12], "password123": 11, "locat": [11, 12], "destin": [11, 12], "store": [11, 12], "lib": [11, 12], "libvirt": [11, 12], "qcow": [11, 12], "myimag": 11, "cpu": [11, 12], "4": 11, "amount": [11, 12], "mb": [11, 12], "16384": [11, 12], "8192": 11, "variant": [11, 12], "centos7": [11, 12], "0": [11, 12], "boot": [11, 12], "hd": [11, 12], "cdrom": [11, 12], "model": [11, 12], "eno0": [11, 12], "eth0": 11, "virtio": [11, 12], "mode": [11, 12], "nat": 11, "net": [11, 12], "b": [11, 12], "app": [11, 12], "mir": [11, 12], "vm_password": [11, 12], "vmpassword123": 11, "vm_old_password": [11, 12], "old": [11, 12], "applic": [11, 12], "oldpassword456": 11, "myvm": 11, "50": 11, "subnet": [11, 12], "mask": [11, 12], "": [11, 12], "255": 11, "vm_api_usernam": [11, 12], "api_us": 11, "all": [11, 12], "ar": [11, 12], "correctli": 11, "ha": 11, "internet": 11, "just": 11, "ssh": [11, 12], "simplifi": 11, "depend": [11, 12], "want": [11, 12], "need": [11, 12], "consist": 11, "setup_hypervisor": 11, "defin": 11, "appli": 11, "work": [11, 12], "both": 11, "hat": 11, "debian": 11, "addition": [11, 12], "avail": [11, 12], "linux": 11, "backup": 11, "netplan": [11, 12], "ubuntu": [11, 12], "manag": [11, 12], "rhel": [11, 12], "complex": 11, "can": [11, 12], "made": [11, 12], "basic": [11, 12], "implement": 11, "facilit": 11, "kei": [11, 12], "enabl": 11, "authent": 11, "without": 11, "input": 11, "forc": 11, "copi": 11, "ani": [11, 12], "even": 11, "inventori": 11, "e": 11, "g": 11, "root": [11, 12], "itself": 11, "localhost": 11, "connect": 11, "ssh_remote_setup_individu": 11, "In": 11, "case": 11, "sinc": 11, "type": 11, "here": 11, "respons": [11, 12], "accept": 11, "also": [11, 12], "were": 11, "redhat": [11, 12], "associ": [11, 12], "along": [11, 12], "its": 11, "repositori": 12, "variabl": 12, "v2": 12, "softwar": 12, "later": 12, "older": 12, "do": 12, "howev": 12, "mai": 12, "further": 12, "custom": 12, "refer": 12, "gsg": 12, "document": 12, "instruct": 12, "tailor": 12, "meet": 12, "pre": 12, "pass": 12, "python3": 12, "folder": 12, "interfer": 12, "other": 12, "keygen": 12, "t": 12, "rsa": 12, "4096": 12, "f": 12, "note": 12, "doe": 12, "add": 12, "Then": 12, "startup": 12, "d": 12, "encount": 12, "permiss": 12, "issu": 12, "might": 12, "try": 12, "sudo": 12, "like": 12, "build_config": 12, "own": 12, "pleas": 12, "look": 12, "what": 12, "onc": 12, "readi": 12, "Or": 12, "so": 12, "ansible_autom": 12, "prompt": 12, "exit": 12, "current": 12, "timestamp": 12, "doesn": 12, "read": 12, "displai": 12, "progress": 12, "flow": 12, "diagram": 12, "when": 12, "fill": 12, "out": 12, "guidelin": 12, "below": 12, "memori": 12, "mira": 12, "vm_allow_enrol": 12, "boolean": 12, "chang": 12, "state": 12, "mark": 12, "mandatori": 12, "specif": 12, "setup_eto": 12, "modifi": 12, "independ": 12, "alter": 12, "remain": 12, "unchang": 12, "old_password": 12, "updat": 12, "adjust": 12, "should": 12, "someth": 12, "go": 12, "wrong": 12, "wish": 12, "same": 12, "networkmanag": 12, "plai": 12, "secret": 12, "location_on_machin": 12, "mgmt": 12, "br": 12, "x": 12}, "objects": {"ansible.roles.build_kvm.files": [[1, 0, 0, "-", "helpers"]], "ansible.roles.build_kvm.files.helpers": [[1, 1, 1, "", "clean_up_sensitive_info"], [1, 1, 1, "", "create_directory"], [1, 1, 1, "", "download_extract_and_rename_qcow2"], [1, 1, 1, "", "download_or_retrieve_file"], [1, 1, 1, "", "generate_cloud_init_files"], [1, 1, 1, "", "generate_cloud_init_iso"]], "": [[3, 0, 0, "-", "cleanup"], [4, 0, 0, "-", "deploy"]], "cleanup": [[3, 1, 1, "", "cleanup_func"], [3, 1, 1, "", "parse_cleanup_arguments"]], "deploy": [[4, 1, 1, "", "builder_func"], [4, 1, 1, "", "parse_deployment_arguments"]], "utils": [[7, 0, 0, "-", "cloud_init"], [8, 0, 0, "-", "docker"], [9, 0, 0, "-", "utils"]], "utils.cloud_init": [[7, 1, 1, "", "cloud_init_sha512_crypt"], [7, 1, 1, "", "generate_random_salt"]], "utils.docker": [[8, 1, 1, "", "ensure_container_running"], [8, 1, 1, "", "is_container_running"], [8, 1, 1, "", "is_docker_running"], [8, 1, 1, "", "start_container"], [8, 1, 1, "", "stop_container"]], "utils.utils": [[9, 2, 1, "", "colors"], [9, 1, 1, "", "setup_logging"]], "utils.utils.colors": [[9, 3, 1, "", "BLUE"], [9, 3, 1, "", "BOLD"], [9, 3, 1, "", "CYAN"], [9, 3, 1, "", "DARKCYAN"], [9, 3, 1, "", "END"], [9, 3, 1, "", "GREEN"], [9, 3, 1, "", "PURPLE"], [9, 3, 1, "", "RED"], [9, 3, 1, "", "UNDERLINE"], [9, 3, 1, "", "YELLOW"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:attribute"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "attribute", "Python attribute"]}, "titleterms": {"how": 0, "deploy": [0, 4, 10, 12], "happen": 0, "content": [0, 6, 10], "ansibl": [1, 11], "python": 1, "helper": 1, "paramet": [1, 4, 7, 8, 9], "return": [1, 3, 4, 7, 8, 9], "note": [1, 3, 4, 7, 9, 11], "kvm": [2, 12], "setup": [2, 5, 12], "cleanup": [3, 12], "exampl": [3, 4], "eto": [5, 12], "web": 5, "ui": 5, "util": [6, 9], "cloud": 7, "init": 7, "modul": [7, 8, 9], "docker": 8, "welcom": 10, "virtual": [10, 12], "machin": [10, 12], "autom": [10, 12], "": 10, "document": 10, "playbook": 11, "install_kvm": 11, "usag": [11, 12], "variabl": 11, "instal": [11, 12], "requir": 11, "structur": 11, "ssh_setup_individu": 11, "cleanup_hypervisor": 11, "vm": 12, "get": 12, "start": 12, "prerequisit": 12, "descript": 12, "templat": 12, "field": 12, "via": 12, "api": 12}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 60}, "alltitles": {"How Deployment Happens": [[0, "how-deployment-happens"]], "Contents:": [[0, null], [6, null], [10, null]], "Ansible Python Helpers": [[1, "ansible-python-helpers"]], "Parameters": [[1, "parameters"], [1, "id1"], [1, "id4"], [1, "id7"], [1, "id10"], [4, "parameters"], [7, "parameters"], [8, "parameters"], [8, "id2"], [8, "id4"], [8, "id6"], [9, "parameters"]], "Returns": [[1, "returns"], [1, "id2"], [1, "id5"], [1, "id8"], [1, "id11"], [3, "returns"], [4, "returns"], [4, "id1"], [7, "returns"], [7, "id1"], [8, "returns"], [8, "id1"], [8, "id3"], [8, "id5"], [8, "id7"], [9, "returns"]], "Notes": [[1, "notes"], [1, "id3"], [1, "id6"], [1, "id9"], [1, "id12"], [3, "notes"], [4, "notes"], [4, "id2"], [7, "notes"], [7, "id2"], [9, "notes"]], "KVM Setup": [[2, "kvm-setup"]], "Cleanup": [[3, "cleanup"], [12, "cleanup"]], "Example": [[3, "example"], [4, "example"]], "Deployment": [[4, "deployment"]], "Setup ETO Web UI": [[5, "setup-eto-web-ui"]], "Utils": [[6, "utils"]], "Cloud Init Module": [[7, "module-utils.cloud_init"]], "Docker Module": [[8, "module-utils.docker"]], "Utils Module": [[9, "module-utils.utils"]], "Welcome to Virtual Machine Deployment Automation\u2019s documentation!": [[10, "welcome-to-virtual-machine-deployment-automation-s-documentation"]], "Ansible Playbooks": [[11, "ansible-playbooks"]], "install_kvm": [[11, "install-kvm"]], "Usage": [[11, "usage"], [11, "id1"], [11, "id3"], [11, "id6"], [12, "usage"]], "Variables": [[11, "variables"]], "Note": [[11, "note"], [11, "id2"], [11, "id5"], [11, "id8"]], "Install Requirements Playbook": [[11, "install-requirements-playbook"]], "Playbook Structure": [[11, "playbook-structure"], [11, "id4"], [11, "id7"]], "ssh_setup_individual": [[11, "ssh-setup-individual"]], "cleanup_hypervisor": [[11, "cleanup-hypervisor"]], "Setup": [[12, "setup"]], "VM Deployment Automation": [[12, "vm-deployment-automation"]], "Getting Started": [[12, "getting-started"]], "Prerequisites": [[12, "prerequisites"]], "Installation": [[12, "installation"]], "Description": [[12, "description"]], "Template for Virtual Machine Deployment KVM": [[12, "template-for-virtual-machine-deployment-kvm"]], "Template Fields": [[12, "id1"]], "ETO Setup via API": [[12, "eto-setup-via-api"]]}, "indexentries": {"ansible.roles.build_kvm.files.helpers": [[1, "module-ansible.roles.build_kvm.files.helpers"]], "clean_up_sensitive_info() (in module ansible.roles.build_kvm.files.helpers)": [[1, "ansible.roles.build_kvm.files.helpers.clean_up_sensitive_info"]], "create_directory() (in module ansible.roles.build_kvm.files.helpers)": [[1, "ansible.roles.build_kvm.files.helpers.create_directory"]], "download_extract_and_rename_qcow2() (in module ansible.roles.build_kvm.files.helpers)": [[1, "ansible.roles.build_kvm.files.helpers.download_extract_and_rename_qcow2"]], "download_or_retrieve_file() (in module ansible.roles.build_kvm.files.helpers)": [[1, "ansible.roles.build_kvm.files.helpers.download_or_retrieve_file"]], "generate_cloud_init_files() (in module ansible.roles.build_kvm.files.helpers)": [[1, "ansible.roles.build_kvm.files.helpers.generate_cloud_init_files"]], "generate_cloud_init_iso() (in module ansible.roles.build_kvm.files.helpers)": [[1, "ansible.roles.build_kvm.files.helpers.generate_cloud_init_iso"]], "module": [[1, "module-ansible.roles.build_kvm.files.helpers"], [3, "module-cleanup"], [4, "module-deploy"], [7, "module-utils.cloud_init"], [8, "module-utils.docker"], [9, "module-utils.utils"]], "cleanup": [[3, "module-cleanup"]], "cleanup_func() (in module cleanup)": [[3, "cleanup.cleanup_func"]], "parse_cleanup_arguments() (in module cleanup)": [[3, "cleanup.parse_cleanup_arguments"]], "builder_func() (in module deploy)": [[4, "deploy.builder_func"]], "deploy": [[4, "module-deploy"]], "parse_deployment_arguments() (in module deploy)": [[4, "deploy.parse_deployment_arguments"]], "cloud_init_sha512_crypt() (in module utils.cloud_init)": [[7, "utils.cloud_init.cloud_init_sha512_crypt"]], "generate_random_salt() (in module utils.cloud_init)": [[7, "utils.cloud_init.generate_random_salt"]], "utils.cloud_init": [[7, "module-utils.cloud_init"]], "ensure_container_running() (in module utils.docker)": [[8, "utils.docker.ensure_container_running"]], "is_container_running() (in module utils.docker)": [[8, "utils.docker.is_container_running"]], "is_docker_running() (in module utils.docker)": [[8, "utils.docker.is_docker_running"]], "start_container() (in module utils.docker)": [[8, "utils.docker.start_container"]], "stop_container() (in module utils.docker)": [[8, "utils.docker.stop_container"]], "utils.docker": [[8, "module-utils.docker"]], "blue (utils.utils.colors attribute)": [[9, "utils.utils.colors.BLUE"]], "bold (utils.utils.colors attribute)": [[9, "utils.utils.colors.BOLD"]], "cyan (utils.utils.colors attribute)": [[9, "utils.utils.colors.CYAN"]], "darkcyan (utils.utils.colors attribute)": [[9, "utils.utils.colors.DARKCYAN"]], "end (utils.utils.colors attribute)": [[9, "utils.utils.colors.END"]], "green (utils.utils.colors attribute)": [[9, "utils.utils.colors.GREEN"]], "purple (utils.utils.colors attribute)": [[9, "utils.utils.colors.PURPLE"]], "red (utils.utils.colors attribute)": [[9, "utils.utils.colors.RED"]], "underline (utils.utils.colors attribute)": [[9, "utils.utils.colors.UNDERLINE"]], "yellow (utils.utils.colors attribute)": [[9, "utils.utils.colors.YELLOW"]], "colors (class in utils.utils)": [[9, "utils.utils.colors"]], "setup_logging() (in module utils.utils)": [[9, "utils.utils.setup_logging"]], "utils.utils": [[9, "module-utils.utils"]]}})